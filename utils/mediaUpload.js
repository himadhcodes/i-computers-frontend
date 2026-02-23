import { createClient } from "@supabase/supabase-js"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxb2x4d3Fvc3p4aWl1aHdwY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3OTYyODUsImV4cCI6MjA4NzM3MjI4NX0.BsiAFCZXpzVGkT5438k_aESC6m6plqp1Dq2IyPN1WFQ"
const supabaseUrl = "https://lqolxwqoszxiiuhwpcuz.supabase.co"

const supabase = createClient(supabaseUrl , supabaseKey)

export default function uploadFile(file){
    return new Promise(
        (resolve , reject)=>{

            if(file == null){
                reject("No file provided")
                return
            }

            const timestamp = new Date().getTime()
            const fileName = timestamp + "-"+file.name

            supabase.storage.from("images").upload(fileName , file , {
                upsert : false,
                cacheControl : 3600
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file")
                }
            )

        }
    )
}