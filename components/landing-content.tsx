"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Gyan Sagar",
    avatar: "J",
   
  },
  {
    name: "Amit Pal",
    avatar: "A",
    
  },
  {
    name: "Shashi Kr Sah",
    avatar: "M",
   
  },
  {
    name: "Amit Nishad",
    avatar: "M",
  
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Project Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                 
                </div>
              </CardTitle>
             
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}