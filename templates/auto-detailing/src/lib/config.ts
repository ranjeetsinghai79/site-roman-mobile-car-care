import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Roman Mobile Car Care",
    tagline: "Your Car Deserves The Best",
    phone: "(727) 902-1969",
    phoneHref: "tel:+17279021969",
    email: "romanmobilecarcare@gmail.com",
    address: "Tampa Bay Area",
    city: "Tampa",
    serviceAreas: ["Tampa Bay Area"],
    license: "Licensed & Insured",
    since: "2015",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ocean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "truck", title: "Mobile Detailing", desc: "We bring professional auto detailing services directly to your doorstep, saving you time and hassle.", urgent: false },
    { icon: "sparkles", title: "Interior & Exterior Detail", desc: "Comprehensive cleaning and restoration for both the inside and outside of your vehicle, making it look new.", urgent: false },
    { icon: "shield-check", title: "Ceramic Coating", desc: "Long-lasting paint protection that provides superior gloss, hydrophobicity, and scratch resistance.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Expert removal of swirl marks, scratches, and imperfections to restore your vehicle's paint to a flawless finish.", urgent: false },
    { icon: "thermometer", title: "Headlight Restoration", desc: "Restore clarity and brightness to foggy or yellowed headlights, improving visibility and aesthetics.", urgent: false },
    { icon: "heart", title: "Pet Hair Removal", desc: "Thorough and effective removal of stubborn pet hair from all interior surfaces, leaving your car fresh.", urgent: false }
  ],

  testimonials: [
    { name: "Jim Goudy", location: "Tampa", stars: 5, text: "Roman detailed and ceramic coated my SUV, and I couldn't be happier. He was courteous, professional, and didn't short-cut anything, even explaining how to maximize the coating's life. The job was done professionally with quality products. Highly recommend Roman for his diligence and care!" },
    { name: "Benjamin Brener", location: "St. Petersburg", stars: 5, text: "Roman was amazing! Our 85lb puppy sheds everywhere, leaving fur in every crack. After a few hours of hard work, the car looks brand new! I'm no longer embarrassed about my vehicle's interior. If you need amazing detailing, don't hesitate to call Roman!" },
    { name: "Somer Bishop", location: "Clearwater", stars: 5, text: "Roman detailed my car's interior today, and I’m beyond impressed. The full treatment, including ozone and steam cleaning, made it feel brand new. He was thorough, hardworking, and paid attention to every detail. My car feels super clean and refreshed. Highly recommend Roman for quality work!" }
  ],

  trustBadges: [
    "Mobile Service", "Quality Products", "Experienced Detailers", "Customer Satisfaction", "Flexible Scheduling"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Vehicles Detailed", suffix: "+", decimals: 0 },
    { value: 8, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Convenient Mobile Service", desc: "We come to you, saving you time and hassle with our on-site detailing." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront quotes with no hidden fees, so you know exactly what to expect." },
    { icon: "award", title: "Certified Professionals", desc: "Our detailers are highly trained and experienced, ensuring top-quality results." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We stand behind our work and ensure you're completely happy with the results." },
    { icon: "phone", title: "Easy Booking", desc: "Schedule your detailing service quickly and conveniently online or by phone." },
    { icon: "truck", title: "Fully Equipped", desc: "Our mobile units are stocked with premium tools and products for superior detailing." }
  ],

  formServiceOptions: ["Mobile Detailing", "Interior & Exterior Detail", "Ceramic Coating", "Paint Correction", "Headlight Restoration", "Pet Hair Removal"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!