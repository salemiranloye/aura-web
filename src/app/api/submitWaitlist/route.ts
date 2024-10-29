import { NextResponse } from 'next/server';
import { createClient } from "@/util/supabase/server";

type FormData = {
    email: string;
    appIdea: string;
    firstName: string;
    lastName: string;
    role: string;
};

export async function POST(req: Request) {
  const supabase = createClient();
  const formData = await req.formData();
  console.log("Form data received:", formData);

  const fields = Object.fromEntries(formData.entries()) as unknown as FormData;

  const { data: response, error } = await supabase.from('waitlist').upsert({
    first_name: fields.firstName,
    last_name: fields.lastName,
    email: fields.email,
    app_idea: fields.appIdea,
    role: fields.role
  }).select();

  if (error) {
    console.error("Error inserting post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success", data: response }, { status: 200 });
}
