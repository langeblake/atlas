"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}

const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 letters is required"
    })
});

export async function create(prevState: State, formData: FormData) {
    // sateParse does not throw an error (which won't break the app)
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title")
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields."
        }
    }

    const { title } = validatedFields.data;

    try {
        await db.board.create({
            data: {
                title,
            }
        });
    } catch(error) {
        return {  
            message: "Database Error",
        }
    }
    

    revalidatePath("/organization/org_2YlMd9lPe8FRp4axc3SisVicep5");
    redirect("/organization/org_2YlMd9lPe8FRp4axc3SisVicep5");
}

// used in form.tsx