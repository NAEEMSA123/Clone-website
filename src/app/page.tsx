import HeroSection from "@/components/heroSection";
import FeaturedCourses from "@/components/featuredCourses";
import whyChooseUs from "@/components/WhyChooseUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars"
import Instructors from "@/components/instractors";
import Footer from "@/components/Footer"


export default function Home() {
  return (
   
   <main className="min-h-screen bg-black/[0.96] antialiased bg-gird-white/[0.02]">
 
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <MusicSchoolTestimonials/>
   <UpcomingWebnars/>
   <Instructors/>
   <Footer/>
   

   </main>
  
  );
}
