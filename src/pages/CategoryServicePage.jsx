// "use client"

// import { useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { Search, Star, MapPin, Phone, Clock, ArrowLeft, Grid, List, TrendingUp, Verified } from "lucide-react"

// function CategoryServicesPage() {
//   const { categoryId } = useParams()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [sortBy, setSortBy] = useState("relevance")
//   const [filterBy, setFilterBy] = useState("all")
//   const [viewMode, setViewMode] = useState("grid")
//   const [priceRange, setPriceRange] = useState("all")
//   const [rating, setRating] = useState("all")

//   // Complete category data
//   const categoryData = {
//     "beauty-spa": {
//       name: "Beauty & Spa",
//       description: "Professional beauty and wellness services",
//       icon: "💄",
//       color: "from-pink-500 to-rose-500",
//     },
//     healthcare: {
//       name: "Healthcare",
//       description: "Medical and healthcare services",
//       icon: "🏥",
//       color: "from-blue-500 to-cyan-500",
//     },
//     restaurants: {
//       name: "Restaurants",
//       description: "Dining and food services",
//       icon: "🍽️",
//       color: "from-orange-500 to-red-500",
//     },
//     automotive: {
//       name: "Automotive",
//       description: "Car repair and maintenance services",
//       icon: "🚗",
//       color: "from-gray-600 to-gray-800",
//     },
//     "home-services": {
//       name: "Home Services",
//       description: "Home improvement and maintenance",
//       icon: "🏠",
//       color: "from-green-500 to-emerald-500",
//     },
//     fitness: {
//       name: "Fitness & Wellness",
//       description: "Gyms, trainers, and fitness services",
//       icon: "💪",
//       color: "from-purple-500 to-indigo-500",
//     },
//     education: {
//       name: "Education & Learning",
//       description: "Tutoring and educational services",
//       icon: "📚",
//       color: "from-amber-500 to-yellow-500",
//     },
//     legal: {
//       name: "Legal Services",
//       description: "Legal advice and representation",
//       icon: "⚖️",
//       color: "from-slate-600 to-slate-800",
//     },
//     financial: {
//       name: "Financial Services",
//       description: "Accounting and financial advice",
//       icon: "💰",
//       color: "from-emerald-600 to-teal-600",
//     },
//     "pet-services": {
//       name: "Pet Services",
//       description: "Veterinary and pet care services",
//       icon: "🐕",
//       color: "from-rose-400 to-pink-500",
//     },
//     technology: {
//       name: "Technology",
//       description: "IT support and tech services",
//       icon: "💻",
//       color: "from-blue-600 to-indigo-600",
//     },
//     entertainment: {
//       name: "Entertainment",
//       description: "Event planning and entertainment services",
//       icon: "🎉",
//       color: "from-violet-500 to-purple-600",
//     },
//   }

//   // Comprehensive services data organized by category
//   const allServices = {
//     "beauty-spa": [
//       {
//         id: 1,
//         name: "Luxe Beauty Salon",
//         category: "beauty-spa",
//         description: "Premium hair styling, coloring, and beauty treatments with expert stylists",
//         rating: 4.8,
//         reviewCount: 245,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "123 Fashion Ave, Downtown",
//         phone: "(555) 123-4567",
//         hours: "9:00 AM - 8:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Hair Styling", "Coloring", "Facial", "Manicure"],
//         distance: "0.5 miles",
//       },
//       {
//         id: 2,
//         name: "Wellness Spa Retreat",
//         category: "beauty-spa",
//         description: "Full-service spa offering massages, facials, and wellness treatments",
//         rating: 4.9,
//         reviewCount: 189,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "456 Serenity Blvd, Uptown",
//         phone: "(555) 987-6543",
//         hours: "10:00 AM - 9:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Massage", "Facial", "Body Treatment", "Aromatherapy"],
//         distance: "1.2 miles",
//       },
//       {
//         id: 3,
//         name: "Quick Cuts Barbershop",
//         category: "beauty-spa",
//         description: "Traditional barbershop with modern styling and grooming services",
//         rating: 4.6,
//         reviewCount: 156,
//         price: "$",
//         priceRange: "budget",
//         address: "789 Main St, Midtown",
//         phone: "(555) 456-7890",
//         hours: "8:00 AM - 7:00 PM",
//         verified: false,
//         trending: true,
//         tags: ["Haircut", "Beard Trim", "Shave", "Styling"],
//         distance: "2.1 miles",
//       },
//       {
//         id: 4,
//         name: "Glow Skincare Studio",
//         category: "beauty-spa",
//         description: "Specialized skincare treatments and anti-aging solutions",
//         rating: 4.7,
//         reviewCount: 203,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "321 Beauty Lane, Westside",
//         phone: "(555) 234-5678",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Facial", "Chemical Peel", "Microdermabrasion", "Anti-aging"],
//         distance: "1.8 miles",
//       },
//     ],
//     healthcare: [
//       {
//         id: 101,
//         name: "City Family Medical Center",
//         category: "healthcare",
//         description: "Comprehensive family medicine and preventive care services",
//         rating: 4.7,
//         reviewCount: 342,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "456 Health Ave, Medical District",
//         phone: "(555) 234-5678",
//         hours: "7:00 AM - 7:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Family Medicine", "Preventive Care", "Immunizations", "Physical Exams"],
//         distance: "0.8 miles",
//       },
//       {
//         id: 102,
//         name: "Downtown Dental Care",
//         category: "healthcare",
//         description: "Modern dental practice offering comprehensive oral health services",
//         rating: 4.8,
//         reviewCount: 198,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "789 Smile Street, Downtown",
//         phone: "(555) 345-6789",
//         hours: "8:00 AM - 6:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Dental Cleaning", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
//         distance: "1.5 miles",
//       },
//       {
//         id: 103,
//         name: "Vision Plus Eye Care",
//         category: "healthcare",
//         description: "Complete eye care services including exams and corrective solutions",
//         rating: 4.6,
//         reviewCount: 167,
//         price: "$$",
//         priceRange: "moderate",
//         address: "321 Vision Blvd, Westside",
//         phone: "(555) 456-7890",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Eye Exams", "Contact Lenses", "Glasses", "Vision Therapy"],
//         distance: "2.0 miles",
//       },
//     ],
//     restaurants: [
//       {
//         id: 201,
//         name: "The Garden Bistro",
//         category: "restaurants",
//         description: "Farm-to-table dining with seasonal menus and organic ingredients",
//         rating: 4.8,
//         reviewCount: 423,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "123 Garden Street, Downtown",
//         phone: "(555) 321-6543",
//         hours: "11:00 AM - 10:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Farm-to-Table", "Organic", "Vegetarian", "Wine Bar"],
//         distance: "0.6 miles",
//       },
//       {
//         id: 202,
//         name: "Mario's Authentic Pizza",
//         category: "restaurants",
//         description: "Traditional Italian pizza and pasta made with imported ingredients",
//         rating: 4.7,
//         reviewCount: 356,
//         price: "$$",
//         priceRange: "moderate",
//         address: "456 Little Italy Ave, North End",
//         phone: "(555) 432-7654",
//         hours: "12:00 PM - 11:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Italian", "Pizza", "Pasta", "Family-Friendly"],
//         distance: "1.1 miles",
//       },
//       {
//         id: 203,
//         name: "Sakura Sushi Bar",
//         category: "restaurants",
//         description: "Fresh sushi and Japanese cuisine in an elegant atmosphere",
//         rating: 4.9,
//         reviewCount: 287,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "789 Zen Way, East District",
//         phone: "(555) 543-8765",
//         hours: "5:00 PM - 12:00 AM",
//         verified: true,
//         trending: true,
//         tags: ["Sushi", "Japanese", "Fresh Fish", "Sake Bar"],
//         distance: "1.8 miles",
//       },
//     ],
//     automotive: [
//       {
//         id: 301,
//         name: "AutoCare Express",
//         category: "automotive",
//         description: "Quick and reliable auto repair services with certified mechanics",
//         rating: 4.6,
//         reviewCount: 234,
//         price: "$$",
//         priceRange: "moderate",
//         address: "123 Motor Ave, Industrial District",
//         phone: "(555) 654-9876",
//         hours: "7:00 AM - 6:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Oil Change", "Brake Service", "Tire Rotation", "Diagnostics"],
//         distance: "2.3 miles",
//       },
//       {
//         id: 302,
//         name: "Premium Auto Detailing",
//         category: "automotive",
//         description: "Professional car detailing and paint protection services",
//         rating: 4.8,
//         reviewCount: 145,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "456 Shine Street, South Side",
//         phone: "(555) 765-0987",
//         hours: "8:00 AM - 5:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Car Wash", "Detailing", "Paint Protection", "Interior Cleaning"],
//         distance: "1.7 miles",
//       },
//       {
//         id: 303,
//         name: "Elite Transmission Repair",
//         category: "automotive",
//         description: "Specialized transmission repair and rebuild services",
//         rating: 4.5,
//         reviewCount: 189,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "789 Gear Street, Auto District",
//         phone: "(555) 876-1098",
//         hours: "8:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Transmission Repair", "Rebuild", "Clutch Service", "Warranty"],
//         distance: "3.1 miles",
//       },
//     ],
//     "home-services": [
//       {
//         id: 401,
//         name: "Reliable Plumbing Co.",
//         category: "home-services",
//         description: "24/7 plumbing services for residential and commercial properties",
//         rating: 4.7,
//         reviewCount: 312,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "789 Pipe Lane, Service District",
//         phone: "(555) 876-1098",
//         hours: "24/7 Emergency Service",
//         verified: true,
//         trending: true,
//         tags: ["Emergency Plumbing", "Drain Cleaning", "Pipe Repair", "Water Heater"],
//         distance: "1.4 miles",
//       },
//       {
//         id: 402,
//         name: "CleanPro House Cleaning",
//         category: "home-services",
//         description: "Professional residential cleaning services with eco-friendly products",
//         rating: 4.9,
//         reviewCount: 189,
//         price: "$$",
//         priceRange: "moderate",
//         address: "321 Clean Avenue, Residential Area",
//         phone: "(555) 987-2109",
//         hours: "8:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["House Cleaning", "Eco-Friendly", "Deep Cleaning", "Weekly Service"],
//         distance: "0.9 miles",
//       },
//       {
//         id: 403,
//         name: "PowerUp Electrical Services",
//         category: "home-services",
//         description: "Licensed electricians for residential and commercial electrical work",
//         rating: 4.6,
//         reviewCount: 267,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "654 Volt Street, Service Zone",
//         phone: "(555) 210-3456",
//         hours: "7:00 AM - 8:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Electrical Repair", "Wiring", "Panel Upgrade", "Emergency Service"],
//         distance: "2.2 miles",
//       },
//     ],
//     fitness: [
//       {
//         id: 501,
//         name: "FitZone Gym & Spa",
//         category: "fitness",
//         description: "Full-service fitness center with personal training and spa amenities",
//         rating: 4.5,
//         reviewCount: 428,
//         price: "$$",
//         priceRange: "moderate",
//         address: "123 Fitness Blvd, Health District",
//         phone: "(555) 098-3210",
//         hours: "5:00 AM - 11:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Gym", "Personal Training", "Group Classes", "Spa"],
//         distance: "1.0 miles",
//       },
//       {
//         id: 502,
//         name: "Yoga Sanctuary",
//         category: "fitness",
//         description: "Peaceful yoga studio offering various styles and meditation classes",
//         rating: 4.8,
//         reviewCount: 156,
//         price: "$",
//         priceRange: "budget",
//         address: "456 Zen Street, Peaceful Quarter",
//         phone: "(555) 109-4321",
//         hours: "6:00 AM - 9:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Yoga", "Meditation", "Mindfulness", "Beginner-Friendly"],
//         distance: "1.6 miles",
//       },
//       {
//         id: 503,
//         name: "CrossFit Warriors",
//         category: "fitness",
//         description: "High-intensity CrossFit training with certified coaches",
//         rating: 4.7,
//         reviewCount: 203,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "789 Strong Avenue, Athletic District",
//         phone: "(555) 321-5432",
//         hours: "5:00 AM - 10:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["CrossFit", "HIIT", "Strength Training", "Competition Prep"],
//         distance: "2.4 miles",
//       },
//     ],
//     education: [
//       {
//         id: 601,
//         name: "Academic Excellence Tutoring",
//         category: "education",
//         description: "Professional tutoring services for all grade levels and subjects",
//         rating: 4.9,
//         reviewCount: 234,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "789 Learning Lane, Education District",
//         phone: "(555) 210-5432",
//         hours: "3:00 PM - 9:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Math Tutoring", "Science Help", "Test Prep", "One-on-One"],
//         distance: "1.3 miles",
//       },
//       {
//         id: 602,
//         name: "Harmony Music School",
//         category: "education",
//         description: "Music lessons for all ages and instruments with experienced instructors",
//         rating: 4.7,
//         reviewCount: 167,
//         price: "$$",
//         priceRange: "moderate",
//         address: "321 Melody Ave, Arts Quarter",
//         phone: "(555) 321-6543",
//         hours: "2:00 PM - 8:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Piano Lessons", "Guitar", "Voice", "Music Theory"],
//         distance: "2.1 miles",
//       },
//       {
//         id: 603,
//         name: "Language Masters Institute",
//         category: "education",
//         description: "Foreign language classes and conversation practice with native speakers",
//         rating: 4.6,
//         reviewCount: 145,
//         price: "$$",
//         priceRange: "moderate",
//         address: "456 Global Street, Cultural District",
//         phone: "(555) 432-7654",
//         hours: "9:00 AM - 9:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Spanish", "French", "Mandarin", "Conversation Practice"],
//         distance: "1.8 miles",
//       },
//     ],
//     legal: [
//       {
//         id: 701,
//         name: "Mitchell & Associates Law",
//         category: "legal",
//         description: "Full-service law firm specializing in personal injury and family law",
//         rating: 4.8,
//         reviewCount: 123,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "123 Justice Street, Legal District",
//         phone: "(555) 432-7654",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Personal Injury", "Family Law", "Divorce", "Consultation"],
//         distance: "0.7 miles",
//       },
//       {
//         id: 702,
//         name: "QuickLegal Document Services",
//         category: "legal",
//         description: "Affordable legal document preparation and notary services",
//         rating: 4.5,
//         reviewCount: 98,
//         price: "$",
//         priceRange: "budget",
//         address: "456 Document Drive, Business District",
//         phone: "(555) 543-8765",
//         hours: "9:00 AM - 5:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Document Prep", "Notary", "Wills", "Business Formation"],
//         distance: "1.5 miles",
//       },
//       {
//         id: 703,
//         name: "Corporate Legal Solutions",
//         category: "legal",
//         description: "Business law and corporate legal services for companies of all sizes",
//         rating: 4.7,
//         reviewCount: 156,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "789 Corporate Plaza, Business Center",
//         phone: "(555) 654-9876",
//         hours: "8:00 AM - 7:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Business Law", "Contracts", "Compliance", "Mergers"],
//         distance: "2.3 miles",
//       },
//     ],
//     financial: [
//       {
//         id: 801,
//         name: "Premier Tax & Accounting",
//         category: "financial",
//         description: "Comprehensive tax preparation and accounting services for individuals and businesses",
//         rating: 4.7,
//         reviewCount: 189,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "789 Finance Way, Business District",
//         phone: "(555) 654-9876",
//         hours: "9:00 AM - 7:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Tax Preparation", "Bookkeeping", "Business Accounting", "IRS Support"],
//         distance: "1.2 miles",
//       },
//       {
//         id: 802,
//         name: "WealthWise Financial Planning",
//         category: "financial",
//         description: "Investment advisory and retirement planning services",
//         rating: 4.6,
//         reviewCount: 145,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "321 Investment Blvd, Financial Quarter",
//         phone: "(555) 765-0987",
//         hours: "8:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Investment Planning", "Retirement", "Portfolio Management", "Financial Advice"],
//         distance: "2.0 miles",
//       },
//       {
//         id: 803,
//         name: "QuickBooks Pro Services",
//         category: "financial",
//         description: "Small business bookkeeping and QuickBooks setup services",
//         rating: 4.5,
//         reviewCount: 112,
//         price: "$$",
//         priceRange: "moderate",
//         address: "654 Small Biz Lane, Entrepreneur District",
//         phone: "(555) 876-1098",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["QuickBooks", "Small Business", "Payroll", "Monthly Reports"],
//         distance: "1.7 miles",
//       },
//     ],
//     "pet-services": [
//       {
//         id: 901,
//         name: "Happy Paws Veterinary Clinic",
//         category: "pet-services",
//         description: "Comprehensive veterinary care for dogs, cats, and small animals",
//         rating: 4.8,
//         reviewCount: 267,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "123 Pet Avenue, Animal District",
//         phone: "(555) 876-1098",
//         hours: "8:00 AM - 8:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Veterinary Care", "Surgery", "Dental Care", "Emergency"],
//         distance: "1.1 miles",
//       },
//       {
//         id: 902,
//         name: "Pampered Pets Grooming",
//         category: "pet-services",
//         description: "Professional pet grooming and spa services for all breeds",
//         rating: 4.9,
//         reviewCount: 198,
//         price: "$$",
//         priceRange: "moderate",
//         address: "456 Grooming Lane, Pet Quarter",
//         phone: "(555) 987-2109",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Pet Grooming", "Nail Trimming", "Bathing", "Flea Treatment"],
//         distance: "1.8 miles",
//       },
//       {
//         id: 903,
//         name: "Paws & Play Daycare",
//         category: "pet-services",
//         description: "Dog daycare and boarding services with supervised play and exercise",
//         rating: 4.6,
//         reviewCount: 234,
//         price: "$$",
//         priceRange: "moderate",
//         address: "789 Playful Street, Pet District",
//         phone: "(555) 210-3456",
//         hours: "7:00 AM - 7:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Dog Daycare", "Boarding", "Exercise", "Socialization"],
//         distance: "2.5 miles",
//       },
//     ],
//     technology: [
//       {
//         id: 1001,
//         name: "TechFix Computer Repair",
//         category: "technology",
//         description: "Expert computer and laptop repair services with quick turnaround",
//         rating: 4.6,
//         reviewCount: 178,
//         price: "$$",
//         priceRange: "moderate",
//         address: "789 Tech Street, Digital District",
//         phone: "(555) 098-3210",
//         hours: "10:00 AM - 7:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Computer Repair", "Virus Removal", "Data Recovery", "Hardware Upgrade"],
//         distance: "1.5 miles",
//       },
//       {
//         id: 1002,
//         name: "SmartHome Solutions",
//         category: "technology",
//         description: "Home automation and smart device installation services",
//         rating: 4.7,
//         reviewCount: 134,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "321 Innovation Ave, Tech Quarter",
//         phone: "(555) 109-4321",
//         hours: "9:00 AM - 6:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Smart Home", "Security Systems", "Network Setup", "Installation"],
//         distance: "2.2 miles",
//       },
//       {
//         id: 1003,
//         name: "CloudTech IT Services",
//         category: "technology",
//         description: "Business IT support and cloud migration services",
//         rating: 4.8,
//         reviewCount: 156,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "456 Cloud Drive, Business Tech Park",
//         phone: "(555) 321-5432",
//         hours: "8:00 AM - 8:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["IT Support", "Cloud Migration", "Network Security", "24/7 Support"],
//         distance: "3.0 miles",
//       },
//     ],
//     entertainment: [
//       {
//         id: 1101,
//         name: "Elite Event Planning",
//         category: "entertainment",
//         description: "Full-service event planning for weddings, parties, and corporate events",
//         rating: 4.9,
//         reviewCount: 156,
//         price: "$$$$",
//         priceRange: "luxury",
//         address: "123 Celebration Street, Event District",
//         phone: "(555) 210-5432",
//         hours: "9:00 AM - 7:00 PM",
//         verified: true,
//         trending: true,
//         tags: ["Wedding Planning", "Corporate Events", "Party Planning", "Coordination"],
//         distance: "1.0 miles",
//       },
//       {
//         id: 1102,
//         name: "Capture Moments Photography",
//         category: "entertainment",
//         description: "Professional photography services for weddings, portraits, and events",
//         rating: 4.8,
//         reviewCount: 223,
//         price: "$$$",
//         priceRange: "expensive",
//         address: "456 Picture Perfect Lane, Arts District",
//         phone: "(555) 321-6543",
//         hours: "10:00 AM - 8:00 PM",
//         verified: true,
//         trending: false,
//         tags: ["Wedding Photography", "Portraits", "Event Photography", "Photo Editing"],
//         distance: "1.7 miles",
//       },
//       {
//         id: 1103,
//         name: "Party Time DJ Services",
//         category: "entertainment",
//         description: "Professional DJ and music services for all types of events",
//         rating: 4.5,
//         reviewCount: 189,
//         price: "$$",
//         priceRange: "moderate",
//         address: "789 Music Avenue, Entertainment Quarter",
//         phone: "(555) 432-7654",
//         hours: "12:00 PM - 12:00 AM",
//         verified: true,
//         trending: true,
//         tags: ["DJ Services", "Wedding DJ", "Party Music", "Sound Equipment"],
//         distance: "2.1 miles",
//       },
//     ],
//   }

//   const currentCategory = categoryData[categoryId] || categoryData["beauty-spa"]
//   const services = allServices[categoryId] || []

//   const sortOptions = [
//     { value: "relevance", label: "Most Relevant" },
//     { value: "rating", label: "Highest Rated" },
//     { value: "reviews", label: "Most Reviews" },
//     { value: "distance", label: "Nearest First" },
//     { value: "price-low", label: "Price: Low to High" },
//     { value: "price-high", label: "Price: High to Low" },
//     { value: "newest", label: "Newest First" },
//   ]

//   const filterOptions = [
//     { value: "all", label: "All Services" },
//     { value: "verified", label: "Verified Only" },
//     { value: "trending", label: "Trending" },
//     { value: "open-now", label: "Open Now" },
//   ]

//   const priceOptions = [
//     { value: "all", label: "All Prices" },
//     { value: "budget", label: "$ (Budget)" },
//     { value: "moderate", label: "$$ (Moderate)" },
//     { value: "expensive", label: "$$$ (Expensive)" },
//     { value: "luxury", label: "$$$$ (Luxury)" },
//   ]

//   const ratingOptions = [
//     { value: "all", label: "All Ratings" },
//     { value: "4.5", label: "4.5+ Stars" },
//     { value: "4.0", label: "4.0+ Stars" },
//     { value: "3.5", label: "3.5+ Stars" },
//   ]

//   // Filter and sort services
//   const filteredServices = services
//     .filter((service) => {
//       const matchesSearch =
//         service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         service.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

//       const matchesFilter =
//         filterBy === "all" ||
//         (filterBy === "verified" && service.verified) ||
//         (filterBy === "trending" && service.trending) ||
//         (filterBy === "open-now" && true) // Mock open now logic

//       const matchesPrice = priceRange === "all" || service.priceRange === priceRange

//       const matchesRating = rating === "all" || service.rating >= Number.parseFloat(rating)

//       return matchesSearch && matchesFilter && matchesPrice && matchesRating
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "rating":
//           return b.rating - a.rating
//         case "reviews":
//           return b.reviewCount - a.reviewCount
//         case "distance":
//           return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
//         case "price-low":
//           return a.price.length - b.price.length
//         case "price-high":
//           return b.price.length - a.price.length
//         case "newest":
//           return b.id - a.id
//         default:
//           return 0
//       }
//     })

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div
//         className={`bg-gradient-to-br ${currentCategory.color} rounded-3xl shadow-sm p-8 text-white relative overflow-hidden`}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//         <div className="relative z-10">
//           <Link
//             to="/categories"
//             className="inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors mb-4"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             <span>Back to Categories</span>
//           </Link>

//           <div className="flex items-center space-x-4 mb-4">
//             <div className="text-4xl">{currentCategory.icon}</div>
//             <div>
//               <h1 className="text-4xl font-bold mb-2">{currentCategory.name}</h1>
//               <p className="text-xl text-white text-opacity-90">{currentCategory.description}</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6 text-white text-opacity-90">
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold">{filteredServices.length}</span>
//               <span>services found</span>
//             </div>
//             {filteredServices.length > 0 && (
//               <div className="flex items-center space-x-2">
//                 <Star className="w-4 h-4 fill-current" />
//                 <span className="font-semibold">
//                   {(filteredServices.reduce((sum, s) => sum + s.rating, 0) / filteredServices.length).toFixed(1)}
//                 </span>
//                 <span>average rating</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Search and Filters */}
//       <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
//         {/* Search Bar */}
//         <div className="relative mb-6">
//           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//             placeholder={`Search ${currentCategory.name.toLowerCase()} services...`}
//           />
//         </div>

//         {/* Filters Row */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
//           <div className="flex flex-wrap gap-4">
//             {/* Sort */}
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               {sortOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             {/* Filter */}
//             <select
//               value={filterBy}
//               onChange={(e) => setFilterBy(e.target.value)}
//               className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               {filterOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             {/* Price Range */}
//             <select
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//               className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               {priceOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             {/* Rating */}
//             <select
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               {ratingOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* View Controls */}
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-600">View:</span>
//             <div className="flex bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-md transition-all duration-200 ${
//                   viewMode === "grid" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <Grid className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-md transition-all duration-200 ${
//                   viewMode === "list" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <List className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Grid/List */}
//       <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}`}>
//         {filteredServices.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//           >
//             {viewMode === "grid" ? (
//               // Grid View
//               <div>
//                 {/* Service Image */}
//                 <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-4xl">{currentCategory.icon}</div>
//                   </div>

//                   {/* Badges */}
//                   <div className="absolute top-3 left-3 flex flex-col space-y-2">
//                     {service.verified && (
//                       <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                         <Verified className="w-3 h-3" />
//                         <span>Verified</span>
//                       </div>
//                     )}
//                     {service.trending && (
//                       <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                         <TrendingUp className="w-3 h-3" />
//                         <span>Trending</span>
//                       </div>
//                     )}
//                   </div>

//                   <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
//                     {service.price}
//                   </div>
//                 </div>

//                 {/* Service Info */}
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-3">
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
//                       {service.name}
//                     </h3>
//                     <div className="flex items-center space-x-1 text-sm">
//                       <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                       <span className="font-semibold">{service.rating}</span>
//                       <span className="text-gray-500">({service.reviewCount})</span>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center space-x-2 text-sm text-gray-500">
//                       <MapPin className="w-4 h-4" />
//                       <span>{service.address}</span>
//                       <span>•</span>
//                       <span>{service.distance}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-sm text-gray-500">
//                       <Clock className="w-4 h-4" />
//                       <span>{service.hours}</span>
//                     </div>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {service.tags.slice(0, 3).map((tag, index) => (
//                       <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                     {service.tags.length > 3 && (
//                       <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
//                         +{service.tags.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex space-x-3">
//                     <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
//                       View Details
//                     </button>
//                     <button className="bg-gray-100 text-gray-700 p-2 rounded-xl hover:bg-gray-200 transition-colors">
//                       <Phone className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // List View
//               <div className="p-6">
//                 <div className="flex space-x-6">
//                   {/* Service Image */}
//                   <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <div className="text-2xl">{currentCategory.icon}</div>
//                   </div>

//                   {/* Service Info */}
//                   <div className="flex-1">
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-center space-x-3">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
//                           {service.name}
//                         </h3>
//                         <div className="flex items-center space-x-1">
//                           {service.verified && (
//                             <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                               <Verified className="w-3 h-3" />
//                               <span>Verified</span>
//                             </div>
//                           )}
//                           {service.trending && (
//                             <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                               <TrendingUp className="w-3 h-3" />
//                               <span>Trending</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="flex items-center space-x-1 text-sm mb-1">
//                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                           <span className="font-semibold">{service.rating}</span>
//                           <span className="text-gray-500">({service.reviewCount})</span>
//                         </div>
//                         <div className="text-lg font-bold text-gray-900">{service.price}</div>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-3">{service.description}</p>

//                     <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
//                       <div className="flex items-center space-x-2">
//                         <MapPin className="w-4 h-4" />
//                         <span>{service.address}</span>
//                         <span>•</span>
//                         <span>{service.distance}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Clock className="w-4 h-4" />
//                         <span>{service.hours}</span>
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {service.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex space-x-3">
//                       <button className="bg-indigo-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
//                         View Details
//                       </button>
//                       <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2">
//                         <Phone className="w-4 h-4" />
//                         <span>Call</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* No Results */}
//       {filteredServices.length === 0 && (
//         <div className="text-center py-12">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Search className="w-12 h-12 text-gray-400" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
//           <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
//           <button
//             onClick={() => {
//               setSearchTerm("")
//               setSortBy("relevance")
//               setFilterBy("all")
//               setPriceRange("all")
//               setRating("all")
//             }}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       )}

//       {/* Load More */}
//       {filteredServices.length > 0 && (
//         <div className="text-center">
//           <button className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
//             Load More Services
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CategoryServicesPage


"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import {
  Search,
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  Grid,
  List,
  TrendingUp,
  Verified,
  XCircle, // For "Not Found" icon
} from "lucide-react"

function CategoryServicesPage() {
  const { categoryId } = useParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [filterBy, setFilterBy] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [priceRange, setPriceRange] = useState("all")
  const [rating, setRating] = useState("all")

  // Complete category data
  const categoryData = {
    "beauty-spa": {
      name: "Beauty & Spa",
      description: "Professional beauty and wellness services",
      icon: "💄",
      color: "from-pink-500 to-rose-500",    },
    healthcare: {
      name: "Healthcare",
      description: "Medical and healthcare services",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500",
    },
    restaurants: {
      name: "Restaurants",
      description: "Dining and food services",
      icon: "🍽️",
      color: "from-orange-500 to-red-500",
    },
    automotive: {
      name: "Automotive",
      description: "Car repair and maintenance services",
      icon: "🚗",
      color: "from-gray-600 to-gray-800",
    },
    "home-services": {
      name: "Home Services",
      description: "Home improvement and maintenance",
      icon: "🏠",
      color: "from-green-500 to-emerald-500",
    },
    education: {
      name: "Education & Learning",
      description: "Tutoring and educational services",
      icon: "📚",
      color: "from-amber-500 to-yellow-500",
    },
    "real-estate": {
    name: "Real Estate",
    description: "Property sales, rentals, agents, and consultants",
    icon: "🏢",
    color: "from-teal-500 to-cyan-500",
  },
  "travel-tourism": {
    name: "Travel & Tourism",
    description: "Hotels, travel agencies, tours, and hospitality",
    icon: "✈️",
    color: "from-sky-500 to-blue-500",
  },
  "fitness-wellness": {
    name: "Fitness & Wellness",
    description: "Gyms, yoga studios, personal trainers, and wellness",
    icon: "💪",
    color: "from-lime-500 to-green-500",
  },
  "professional-services": {
    name: "Professional Services",
    description: "Legal, accounting, consulting, and business services",
    icon: "💼",
    color: "from-violet-500 to-purple-500",
  },
  "retail": {
    name: "Retail",
    description: "Shopping, stores, boutiques, and retail outlets",
    icon: "🛍️",
    color: "from-fuchsia-500 to-pink-500",
  },
  "entertainment": {
    name: "Entertainment",
    description: "Events, venues, entertainment, and recreation",
    icon: "🎭",
    color: "from-amber-500 to-orange-500",
  },

  }

  // Comprehensive services data organized by category
  const allServices = {
    "beauty-spa": [
      {
        id: 1,
        name: "Luxe Beauty Salon",
        category: "beauty-spa",
        description: "Premium hair styling, coloring, and beauty treatments with expert stylists",
        rating: 4.8,
        reviewCount: 245,
        price: "$$$",
        priceRange: "expensive",
        address: "123 Fashion Ave, Downtown",
        phone: "(555) 123-4567",
        hours: "9:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["Hair Styling", "Coloring", "Facial", "Manicure"],
        distance: "0.5 miles",
      },
      {
        id: 2,
        name: "Wellness Spa Retreat",
        category: "beauty-spa",
        description: "Full-service spa offering massages, facials, and wellness treatments",
        rating: 4.9,
        reviewCount: 189,
        price: "$$$$",
        priceRange: "luxury",
        address: "456 Serenity Blvd, Uptown",
        phone: "(555) 987-6543",
        hours: "10:00 AM - 9:00 PM",
        verified: true,
        trending: false,
        tags: ["Massage", "Facial", "Body Treatment", "Aromatherapy"],
        distance: "1.2 miles",
      },
      {
        id: 3,
        name: "Quick Cuts Barbershop",
        category: "beauty-spa",
        description: "Traditional barbershop with modern styling and grooming services",
        rating: 4.6,
        reviewCount: 156,
        price: "$",
        priceRange: "budget",
        address: "789 Main St, Midtown",
        phone: "(555) 456-7890",
        hours: "8:00 AM - 7:00 PM",
        verified: false,
        trending: true,
        tags: ["Haircut", "Beard Trim", "Shave", "Styling"],
        distance: "2.1 miles",      },
      {
        id: 4,
        name: "Glow Skincare Studio",
        category: "beauty-spa",
        description: "Specialized skincare treatments and anti-aging solutions",        rating: 4.7,
        reviewCount: 203,
        price: "$$$",
        priceRange: "expensive",
        address: "321 Beauty Lane, Westside",        phone: "(555) 234-5678",
        hours: "9:00 AM - 6:00 PM",
        verified: true,
        trending: false,
        tags: ["Facial", "Chemical Peel", "Microdermabrasion", "Anti-aging"],
        distance: "1.8 miles",
      },
      {
        id: 5,
        name: "Nail Artistry Hub",
        category: "beauty-spa",
        description: "Creative nail art, gel manicures, and luxurious pedicures",
        rating: 4.5,
        reviewCount: 120,
        price: "$$",
        priceRange: "moderate",
        address: "555 Polish Place, Artsy Quarter",
        phone: "(555) 765-4321",
        hours: "10:00 AM - 7:00 PM",
        verified: true,
        trending: true,
        tags: ["Nail Art", "Manicure", "Pedicure", "Gel Nails"],
        distance: "0.9 miles",
      },
    ],
    healthcare: [
      {
        id: 101,
        name: "City Family Medical Center",
        category: "healthcare",
        description: "Comprehensive family medicine and preventive care services",
        rating: 4.7,
        reviewCount: 342,
        price: "$$$",
        priceRange: "expensive",
        address: "456 Health Ave, Medical District",
        phone: "(555) 234-5678",
        hours: "7:00 AM - 7:00 PM",
        verified: true,
        trending: false,
        tags: ["Family Medicine", "Preventive Care", "Immunizations", "Physical Exams"],
        distance: "0.8 miles",
      },
      {
        id: 102,
        name: "Downtown Dental Care",
        category: "healthcare",
        description: "Modern dental practice offering comprehensive oral health services",
        rating: 4.8,
        reviewCount: 198,
        price: "$$$$",
        priceRange: "luxury",
        address: "789 Smile Street, Downtown",
        phone: "(555) 345-6789",
        hours: "8:00 AM - 6:00 PM",
        verified: true,
        trending: true,
        tags: ["Dental Cleaning", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
        distance: "1.5 miles",
      },
      {
        id: 103,
        name: "Vision Plus Eye Care",
        category: "healthcare",
        description: "Complete eye care services including exams and corrective solutions",
        rating: 4.6,
        reviewCount: 167,
        price: "$$",
        priceRange: "moderate",
        address: "321 Vision Blvd, Westside",
        phone: "(555) 456-7890",
        hours: "9:00 AM - 6:00 PM",
        verified: true,
        trending: false,
        tags: ["Eye Exams", "Contact Lenses", "Glasses", "Vision Therapy"],
        distance: "2.0 miles",
      },
      {
        id: 104,
        name: "PhysioRestore Therapy",
        category: "healthcare",
        description: "Physical therapy and rehabilitation services for injury recovery and pain management",
        rating: 4.7,
        reviewCount: 105,
        price: "$$$",
        priceRange: "expensive",
        address: "678 Recovery Rd, Wellness Center",
        phone: "(555) 789-0123",
        hours: "8:00 AM - 5:00 PM",
        verified: true,
        trending: true,
        tags: ["Physical Therapy", "Rehabilitation", "Pain Management", "Sports Injury"],
        distance: "1.1 miles",
      },
      {
        id: 105,
        name: "Mindful Mental Health",
        category: "healthcare",
        description: "Confidential therapy and counseling for mental well-being",
        rating: 4.9,
        reviewCount: 90,
        price: "$$$$",
        priceRange: "luxury",
        address: "901 Serene St, Quiet Corner",
        phone: "(555) 012-3456",
        hours: "9:00 AM - 7:00 PM",
        verified: true,
        trending: false,
        tags: ["Therapy", "Counseling", "Anxiety", "Depression", "Stress Management"],
        distance: "2.5 miles",
      },
    ],
    restaurants: [      {
        id: 201,
        name: "The Garden Bistro",
        category: "restaurants",
        description: "Farm-to-table dining with seasonal menus and organic ingredients",
        rating: 4.8,
        reviewCount: 423,
        price: "$$$",
        priceRange: "expensive",
        address: "123 Garden Street, Downtown",
        phone: "(555) 321-6543",
        hours: "11:00 AM - 10:00 PM",
        verified: true,
        trending: true,        tags: ["Farm-to-Table", "Organic", "Vegetarian", "Wine Bar"],
        distance: "0.6 miles",
      },
      {
        id: 202,
        name: "Mario's Authentic Pizza",
        category: "restaurants",
        description: "Traditional Italian pizza and pasta made with imported ingredients",
        rating: 4.7,
        reviewCount: 356,
        price: "$$",
        priceRange: "moderate",
        address: "456 Little Italy Ave, North End",
        phone: "(555) 432-7654",
        hours: "12:00 PM - 11:00 PM",
        verified: true,
        trending: false,
        tags: ["Italian", "Pizza", "Pasta", "Family-Friendly"],
        distance: "1.1 miles",
      },
      {
        id: 203,
        name: "Sakura Sushi Bar",
        category: "restaurants",
        description: "Fresh sushi and Japanese cuisine in an elegant atmosphere",
        rating: 4.9,
        reviewCount: 287,
        price: "$$$$",
        priceRange: "luxury",        address: "789 Zen Way, East District",
        phone: "(555) 543-8765",
        hours: "5:00 PM - 12:00 AM",
        verified: true,
        trending: true,
        tags: ["Sushi", "Japanese", "Fresh Fish", "Sake Bar"],
        distance: "1.8 miles",
      },      {
        id: 204,
        name: "The Daily Grind Cafe",
        category: "restaurants",
        description: "Cozy cafe with specialty coffee, pastries, and light lunch options",        rating: 4.6,
        reviewCount: 190,
        price: "$",
        priceRange: "budget",
        address: "111 Coffee St, Arts District",
        phone: "(555) 999-8888",
        hours: "7:00 AM - 6:00 PM",
        verified: false,
        trending: true,
        tags: ["Coffee", "Cafe", "Pastries", "Breakfast", "Lunch"],
        distance: "0.3 miles",
      },
      {
        id: 205,
        name: "Taco Fiesta",
        category: "restaurants",
        description: "Vibrant spot for authentic Mexican street tacos and margaritas",
        rating: 4.7,
        reviewCount: 310,
        price: "$$",
        priceRange: "moderate",
        address: "222 Agave Alley, Southside",
        phone: "(555) 666-7777",
        hours: "11:00 AM - 10:00 PM",
        verified: true,
        trending: true,
        tags: ["Mexican", "Tacos", "Burritos", "Margaritas", "Casual"],
        distance: "1.3 miles",
      },
    ],
    automotive: [
      {
        id: 301,
        name: "AutoCare Express",
        category: "automotive",
        description: "Quick and reliable auto repair services with certified mechanics",
        rating: 4.6,
        reviewCount: 234,
        price: "$$",
        priceRange: "moderate",
        address: "123 Motor Ave, Industrial District",
        phone: "(555) 654-9876",
        hours: "7:00 AM - 6:00 PM",
        verified: true,
        trending: true,
        tags: ["Oil Change", "Brake Service", "Tire Rotation", "Diagnostics"],
        distance: "2.3 miles",
      },
      {
        id: 302,
        name: "Premium Auto Detailing",
        category: "automotive",
        description: "Professional car detailing and paint protection services",
        rating: 4.8,
        reviewCount: 145,
        price: "$$$",
        priceRange: "expensive",
        address: "456 Shine Street, South Side",
        phone: "(555) 765-0987",
        hours: "8:00 AM - 5:00 PM",
        verified: true,        trending: false,
        tags: ["Car Wash", "Detailing", "Paint Protection", "Interior Cleaning"],
        distance: "1.7 miles",
      },
      {
        id: 303,
        name: "Elite Transmission Repair",
        category: "automotive",
        description: "Specialized transmission repair and rebuild services",
        rating: 4.5,
        reviewCount: 189,
        price: "$$$",
        priceRange: "expensive",
        address: "789 Gear Street, Auto District",
        phone: "(555) 876-1098",
        hours: "8:00 AM - 6:00 PM",
        verified: true,
        trending: false,
        tags: ["Transmission Repair", "Rebuild", "Clutch Service", "Warranty"],
        distance: "3.1 miles",
      },
      {
        id: 304,
        name: "Express Lube & Tune",
        category: "automotive",
        description: "Fast oil changes, fluid checks, and basic tune-up services",
        rating: 4.4,
        reviewCount: 200,
        price: "$",
        priceRange: "budget",
        address: "101 Quick Lane, Service Zone",
        phone: "(555) 123-9876",
        hours: "8:00 AM - 7:00 PM",
        verified: true,
        trending: true,
        tags: ["Oil Change", "Tune-up", "Fluid Check", "Vehicle Maintenance"],
        distance: "0.7 miles",
      },
    ],
    "home-services": [
      {
        id: 401,
        name: "Reliable Plumbing Co.",
        category: "home-services",
        description: "24/7 plumbing services for residential and commercial properties",
        rating: 4.7,
        reviewCount: 312,
        price: "$$$",
        priceRange: "expensive",
        address: "789 Pipe Lane, Service District",
        phone: "(555) 876-1098",
        hours: "24/7 Emergency Service",
        verified: true,
        trending: true,
        tags: ["Emergency Plumbing", "Drain Cleaning", "Pipe Repair", "Water Heater"],
        distance: "1.4 miles",
      },
      {
        id: 402,
        name: "CleanPro House Cleaning",
        category: "home-services",
        description: "Professional residential cleaning services with eco-friendly products",
        rating: 4.9,
        reviewCount: 189,
        price: "$$",
        priceRange: "moderate",
        address: "321 Clean Avenue, Residential Area",
        phone: "(555) 987-2109",
        hours: "8:00 AM - 6:00 PM",
        verified: true,
        trending: false,
        tags: ["House Cleaning", "Eco-Friendly", "Deep Cleaning", "Weekly Service"],
        distance: "0.9 miles",
      },
      {
        id: 403,
        name: "PowerUp Electrical Services",
        category: "home-services",
        description: "Licensed electricians for residential and commercial electrical work",
        rating: 4.6,
        reviewCount: 267,
        price: "$$$",
        priceRange: "expensive",
        address: "654 Volt Street, Service Zone",
        phone: "(555) 210-3456",
        hours: "7:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["Electrical Repair", "Wiring", "Panel Upgrade", "Emergency Service"],
        distance: "2.2 miles",
      },
      {
        id: 404,
        name: "Green Thumb Landscaping",
        category: "home-services",
        description: "Professional landscaping, garden design, and lawn care services",
        rating: 4.8,
        reviewCount: 150,
        price: "$$",
        priceRange: "moderate",
        address: "888 Garden Path, Green Acres",
        phone: "(555) 333-4444",
        hours: "7:00 AM - 5:00 PM",
        verified: true,
        trending: false,
        tags: ["Landscaping", "Lawn Care", "Gardening", "Tree Trimming"],
        distance: "3.0 miles",
      },
      {
        id: 405,
        name: "PestGuard Solutions",
        category: "home-services",
        description: "Effective pest control and extermination services for homes and businesses",
        rating: 4.5,
        reviewCount: 95,
        price: "$$",
        priceRange: "moderate",
        address: "999 Bug Bye Blvd, Suburban Area",
        phone: "(555) 555-6666",
        hours: "8:00 AM - 6:00 PM",
        verified: true,
        trending: true,
        tags: ["Pest Control", "Extermination", "Termite Treatment", "Rodent Control"],
        distance: "1.9 miles",
      },
    ],
    fitness: [
      {
        id: 501,
        name: "FitZone Gym & Spa",
        category: "fitness",
        description: "Full-service fitness center with personal training and spa amenities",
        rating: 4.5,
        reviewCount: 428,
        price: "$$",
        priceRange: "moderate",
        address: "123 Fitness Blvd, Health District",
        phone: "(555) 098-3210",
        hours: "5:00 AM - 11:00 PM",
        verified: true,
        trending: true,
        tags: ["Gym", "Personal Training", "Group Classes", "Spa"],
        distance: "1.0 miles",
      },
      {
        id: 502,
        name: "Yoga Sanctuary",
        category: "fitness",
        description: "Peaceful yoga studio offering various styles and meditation classes",
        rating: 4.8,
        reviewCount: 156,
        price: "$",
        priceRange: "budget",
        address: "456 Zen Street, Peaceful Quarter",
        phone: "(555) 109-4321",
        hours: "6:00 AM - 9:00 PM",
        verified: true,
        trending: false,
        tags: ["Yoga", "Meditation", "Mindfulness", "Beginner-Friendly"],
        distance: "1.6 miles",
      },
      {
        id: 503,
        name: "CrossFit Warriors",
        category: "fitness",
        description: "High-intensity CrossFit training with certified coaches",        rating: 4.7,
        reviewCount: 203,
        price: "$$$",
        priceRange: "expensive",
        address: "789 Strong Avenue, Athletic District",        phone: "(555) 321-5432",
        hours: "5:00 AM - 10:00 PM",
        verified: true,
        trending: true,
        tags: ["CrossFit", "HIIT", "Strength Training", "Competition Prep"],
        distance: "2.4 miles",
      },
      {
        id: 504,
        name: "CycleCore Studio",
        category: "fitness",
        description: "Dynamic indoor cycling classes for all fitness levels",
        rating: 4.6,
        reviewCount: 110,        price: "$$",
        priceRange: "moderate",
        address: "333 Spin Cycle Rd, Urban Core",
        phone: "(555) 444-5555",        hours: "6:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["Spin Class", "Cycling", "Cardio", "Group Fitness"],
        distance: "0.8 miles",
      },
    ],
    education: [
      {
        id: 601,
        name: "Academic Excellence Tutoring",
        category: "education",
        description: "Professional tutoring services for all grade levels and subjects",
        rating: 4.9,
        reviewCount: 234,
        price: "$$$",
        priceRange: "expensive",
        address: "789 Learning Lane, Education District",
        phone: "(555) 210-5432",
        hours: "3:00 PM - 9:00 PM",
        verified: true,
        trending: true,
        tags: ["Math Tutoring", "Science Help", "Test Prep", "One-on-One"],
        distance: "1.3 miles",
      },
      {
        id: 602,
        name: "Harmony Music School",
        category: "education",
        description: "Music lessons for all ages and instruments with experienced instructors",
        rating: 4.7,
        reviewCount: 167,
        price: "$$",
        priceRange: "moderate",
        address: "321 Melody Ave, Arts Quarter",
        phone: "(555) 321-6543",
        hours: "2:00 PM - 8:00 PM",
        verified: true,
        trending: false,
        tags: ["Piano Lessons", "Guitar", "Voice", "Music Theory"],
        distance: "2.1 miles",
      },
      {
        id: 603,
        name: "Language Masters Institute",
        category: "education",
        description: "Foreign language classes and conversation practice with native speakers",
        rating: 4.6,
        reviewCount: 145,
        price: "$$",
        priceRange: "moderate",
        address: "456 Global Street, Cultural District",
        phone: "(555) 432-7654",        hours: "9:00 AM - 9:00 PM",
        verified: true,
        trending: true,
        tags: ["Spanish", "French", "Mandarin", "Conversation Practice"],        distance: "1.8 miles",
      },
      {
        id: 604,
        name: "Code Academy Pro",
        category: "education",
        description: "Coding bootcamps and workshops for aspiring developers of all levels",
        rating: 4.8,
        reviewCount: 85,
        price: "$$$$",
        priceRange: "luxury",
        address: "777 Silicon Way, Tech Hub",
        phone: "(555) 000-1111",
        hours: "9:00 AM - 5:00 PM",
        verified: true,        trending: true,
        tags: ["Coding", "Programming", "Web Development", "Bootcamp", "Software"],
        distance: "2.7 miles",
      },
    ],
    "real-estate": [
      {
      id: 701,
      name: "Urban Nest Realty",
      category: "real-estate",
      description: "Boutique real estate agency specializing in luxury urban homes",
      rating: 4.9,
      reviewCount: 187,
      price: "$$$$",
      priceRange: "luxury",
      address: "21 Central Plaza, City Center",
      phone: "(555) 101-2020",
      hours: "9:00 AM - 7:00 PM",
      verified: true,
      trending: true,
      tags: ["Luxury Homes", "Apartments", "Downtown", "Buy & Sell"],
      distance: "1.2 miles",
      },
      {
      id: 702,
      name: "Sunrise Properties",
      category: "real-estate",
      description: "Helping families find their dream suburban homes since 1998",
      rating: 4.7,
      reviewCount: 256,
      price: "$$",
      priceRange: "moderate",
      address: "88 Maple Lane, West Suburbs",
      phone: "(555) 303-4040",
      hours: "10:00 AM - 6:00 PM",
      verified: true,
      trending: false,
      tags: ["Family Homes", "Suburbs", "Realtor", "Affordable"],
      distance: "3.6 miles",
      },
      {
      id: 703,
      name: "GreenLeaf Realty",
      category: "real-estate",
      description: "Eco-friendly and sustainable housing projects",
      rating: 4.6,
      reviewCount: 132,
      price: "$$$",
      priceRange: "expensive",
      address: "45 Eco Drive, North End",
      phone: "(555) 909-8080",
      hours: "9:30 AM - 5:30 PM",
      verified: true,
      trending: false,
      tags: ["Green Homes", "Sustainable", "Modern", "Eco Living"],
      distance: "2.4 miles",
      },
      {
      id: 704,
      name: "Cityscape Builders",
      category: "real-estate",
      description: "Custom home building and renovation specialists",
      rating: 4.8,
      reviewCount: 91,
      price: "$$$$",
      priceRange: "luxury",
      address: "12 Builder's Row, Industrial Zone",
      phone: "(555) 111-6677",
      hours: "8:00 AM - 6:00 PM",
      verified: true,
      trending: true,
      tags: ["Custom Homes", "Renovation", "Luxury", "Construction"],
      distance: "2.9 miles",
      },
    ],
    "travel-tourism": [
      {
        id: 801,
        name: "Wanderlust Travels",
        category: "travel and tourism",
        description: "Tailored international holiday packages and guided tours",
        rating: 4.8,
        reviewCount: 312,
        price: "$$$",
        priceRange: "expensive",
        address: "500 Adventure Rd, Midtown",
        phone: "(555) 222-3333",
        hours: "9:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["International", "Guided Tours", "Family Trips", "Luxury Travel"],
        distance: "0.9 miles",
      },
      {
        id: 802,
        name: "ExploreLocal",
        category: "travel and tourism",
        description: "Weekend getaways and cultural experiences near you",
        rating: 4.5,
        reviewCount: 178,
        price: "$$",
        priceRange: "moderate",
        address: "77 Local Street, Old Town",
        phone: "(555) 444-5555",
        hours: "10:00 AM - 6:00 PM",
        verified: false,
        trending: false,
        tags: ["Local Trips", "Cultural", "Budget", "Short Stays"],
        distance: "2.1 miles",
      },
      {
        id: 803,
        name: "Eco Trekkers",
        category: "travel and tourism",
        description: "Adventure travel agency offering eco-friendly trekking tours",
        rating: 4.7,
        reviewCount: 134,
        price: "$$$",
        priceRange: "expensive",
        address: "28 Hilltop Lane, East Ridge",
        phone: "(555) 222-9999",
        hours: "8:00 AM - 6:00 PM",
        verified: true,
        trending: true,
        tags: ["Adventure", "Trekking", "Eco Travel", "Group Tours"],
        distance: "3.3 miles",
      },
      {
        id: 804,
        name: "FlyHigh Tickets",
        category: "travel and tourism",
        description: "Discounted flights, hotel bookings, and car rentals",
        rating: 4.3,
        reviewCount: 200,
        price: "$$",
        priceRange: "moderate",
        address: "300 Terminal Blvd, Airport Area",
        phone: "(555) 123-1234",
        hours: "9:00 AM - 9:00 PM",
        verified: true,
        trending: false,
        tags: ["Flights", "Hotels", "Bookings", "Budget Travel"],
        distance: "5.0 miles",
      },
    ],
    "fitness-wellness": [
      {
        id: 901,
        name: "ZenFlow Yoga Studio",
        category: "fitness and wellness",
        description: "Peaceful studio offering yoga, pilates, and mindfulness classes",
        rating: 4.9,
        reviewCount: 215,
        price: "$$",
        priceRange: "moderate",
        address: "303 Harmony Blvd, Green District",
        phone: "(555) 777-1212",
        hours: "6:00 AM - 9:00 PM",
        verified: true,
        trending: true,
        tags: ["Yoga", "Meditation", "Wellness", "Pilates"],
        distance: "0.7 miles",
      },
      {
        id: 902,
        name: "IronCore Gym",
        category: "fitness and wellness",
        description: "24/7 gym with strength training, cardio, and personal trainers",
        rating: 4.6,
        reviewCount: 329,
        price: "$",
        priceRange: "budget",
        address: "808 Muscle Ave, Industrial Area",
        phone: "(555) 888-2323",
        hours: "Open 24 Hours",
        verified: true,
        trending: false,
        tags: ["Gym", "Strength", "Cardio", "Personal Training"],
        distance: "2.5 miles",
      },
      {
        id: 903,
        name: "Glow Spa & Wellness",
        category: "fitness and wellness",
        description: "Rejuvenating spa treatments, facials, and massage therapy",
        rating: 4.8,
        reviewCount: 191,
        price: "$$$",
        priceRange: "expensive",
        address: "60 Relaxation Road, Uptown",
        phone: "(555) 432-1010",
        hours: "10:00 AM - 9:00 PM",
        verified: true,
        trending: true,
        tags: ["Spa", "Massage", "Skincare", "Luxury"],
        distance: "1.9 miles",
      },
      {
        id: 904,
        name: "Run Club Athletics",
        category: "fitness and wellness",
        description: "Outdoor bootcamps and community runs for all levels",
        rating: 4.5,
        reviewCount: 108,
        price: "$",
        priceRange: "budget",
        address: "Parkside Field, North City",
        phone: "(555) 543-2323",
        hours: "5:00 AM - 8:00 PM",
        verified: false,
        trending: false,
        tags: ["Outdoor Fitness", "Running", "Bootcamp", "Community"],
        distance: "4.1 miles",
      },
    ],
    "professional-services": [
      {
        id: 1001,
        name: "SmartTax Solutions",
        category: "professional services",
        description: "Trusted experts in tax filing, business audits, and financial planning",
        rating: 4.8,
        reviewCount: 148,
        price: "$$$",
        priceRange: "expensive",
        address: "12 Ledger Lane, Finance Park",
        phone: "(555) 505-6060",
        hours: "9:30 AM - 5:30 PM",
        verified: true,
        trending: true,
        tags: ["Tax Filing", "Finance", "CPA", "Business Services"],
        distance: "1.0 miles",
      },
      {
        id: 1002,
        name: "LegalEase Advocates",
        category: "professional services",
        description: "Affordable legal support for civil, property, and family cases",
        rating: 4.4,
        reviewCount: 203,
        price: "$$",
        priceRange: "moderate",
        address: "66 Justice Road, Courthouse Area",
        phone: "(555) 707-8080",
        hours: "10:00 AM - 6:00 PM",
        verified: false,
        trending: false,
        tags: ["Law", "Legal Aid", "Property", "Civil Cases"],
        distance: "1.9 miles",
      },
      {
        id: 1003,
        name: "TechFix Gurus",
        category: "professional services",
        description: "Computer and gadget repair with home service options",
        rating: 4.6,
        reviewCount: 171,
        price: "$$",
        priceRange: "moderate",
        address: "50 Circuit Drive, Tech Park",
        phone: "(555) 909-0101",
        hours: "11:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["Tech Support", "Repairs", "Gadget Help", "Home Service"],
        distance: "1.7 miles",
      },
      {
        id: 1004,
        name: "Creative Studio Co.",
        category: "professional services",
        description: "Branding, design, and marketing services for startups",
        rating: 4.9,
        reviewCount: 89,
        price: "$$$",
        priceRange: "expensive",
        address: "95 Vision Lane, Art District",
        phone: "(555) 222-4343",
        hours: "10:00 AM - 7:00 PM",
        verified: true,
        trending: true,
        tags: ["Design", "Branding", "Marketing", "Creative"],
        distance: "1.4 miles",
      },
    ],
    "retail": [
      {
        id: 1101,
        name: "Trendy Threads",
        category: "retail",
        description: "Fashion-forward clothing store for men and women",
        rating: 4.7,
        reviewCount: 274,
        price: "$$",
        priceRange: "moderate",
        address: "19 Style Street, Fashion District",
        phone: "(555) 121-3434",
        hours: "11:00 AM - 9:00 PM",
        verified: true,
        trending: true,
        tags: ["Clothing", "Trendy", "Unisex", "Seasonal Collections"],
        distance: "0.4 miles",
      },
      {
        id: 1102,
        name: "Gadget Galaxy",
        category: "retail",
        description: "Electronics and accessories at the best prices",
        rating: 4.5,
        reviewCount: 389,
        price: "$$",
        priceRange: "moderate",
        address: "42 Tech Avenue, Mall Complex",
        phone: "(555) 565-6767",
        hours: "10:00 AM - 10:00 PM",
        verified: true,
        trending: false,
        tags: ["Electronics", "Mobile", "Gadgets", "Accessories"],
        distance: "1.5 miles",
      },
      {
        id: 1103,
        name: "Nature’s Basket",
        category: "retail",
        description: "Organic groceries, fresh produce, and health snacks",
        rating: 4.8,
        reviewCount: 220,
        price: "$$",
        priceRange: "moderate",
        address: "23 Green Market Rd, Wellness Zone",
        phone: "(555) 676-8888",
        hours: "8:00 AM - 8:00 PM",
        verified: true,
        trending: true,
        tags: ["Grocery", "Organic", "Healthy", "Fresh Produce"],
        distance: "1.0 miles",
      },
      {
        id: 1104,
        name: "Page Turners Bookstore",
        category: "retail",
        description: "Independent bookstore with curated reads and cozy ambiance",
        rating: 4.9,
        reviewCount: 165,
        price: "$",
        priceRange: "budget",
        address: "78 Reading Lane, Library Square",
        phone: "(555) 454-1212",
        hours: "10:00 AM - 9:00 PM",
        verified: true,
        trending: false,
        tags: ["Books", "Literature", "Indie", "Coffee & Read"],
        distance: "0.8 miles",
      },
    ],
    "entertainment": [
      {
        id: 1201,
        name: "The Grand Stage",
        category: "entertainment",
        description: "Live theater shows, drama performances, and cultural evenings",
        rating: 4.7,
        reviewCount: 412,
        price: "$$",
        priceRange: "moderate",
        address: "101 Spotlight Avenue, Arts Plaza",
        phone: "(555) 111-2222",
        hours: "6:00 PM - 11:00 PM",
        verified: true,
        trending: true,
        tags: ["Live Shows", "Drama", "Stage", "Theatre"],
        distance: "0.7 miles",
      },
      {
        id: 1202,
        name: "VR World Arena",
        category: "entertainment",
        description: "Immersive VR gaming, simulation zones, and multiplayer battles",
        rating: 4.8,
        reviewCount: 274,
        price: "$$$",
        priceRange: "expensive",
        address: "34 Pixel Street, Tech Zone",
        phone: "(555) 222-3333",
        hours: "12:00 PM - 10:00 PM",
        verified: true,
        trending: true,
        tags: ["VR", "Gaming", "Multiplayer", "Simulation"],
        distance: "1.3 miles",
      },
      {
        id: 1203,
        name: "StrikeZone Bowling",
        category: "entertainment",
        description: "Modern bowling alley with lounge, food court, and arcade",
        rating: 4.5,
        reviewCount: 527,
        price: "$$",
        priceRange: "moderate",
        address: "88 Pin Avenue, Fun Central",
        phone: "(555) 333-4444",
        hours: "1:00 PM - 11:00 PM",
        verified: true,
        trending: false,
        tags: ["Bowling", "Arcade", "Games", "Snacks"],
        distance: "2.0 miles",
      },
      {
        id: 1204,
        name: "Skyline Rooftop Cinema",
        category: "entertainment",
        description: "Open-air rooftop movie screenings with food and drinks",
        rating: 4.6,
        reviewCount: 319,
        price: "$$",
        priceRange: "moderate",
        address: "150 Horizon Towers, Midtown",
        phone: "(555) 444-5555",
        hours: "7:00 PM - 12:00 AM",
        verified: true,
        trending: true,
        tags: ["Cinema", "Rooftop", "Outdoor", "Movies"],
        distance: "1.1 miles",
      },
      {
        id: 1205,
        name: "Bounce Trampoline Park",
        category: "entertainment",
        description: "Indoor trampoline zone with foam pits and obstacle courses",
        rating: 4.6,
        reviewCount: 368,
        price: "$",
        priceRange: "budget",
        address: "72 Jump Street, Activity Hub",
        phone: "(555) 666-7777",
        hours: "10:00 AM - 9:00 PM",
        verified: false,
        trending: false,
        tags: ["Trampoline", "Kids", "Fun", "Fitness"],
        distance: "1.6 miles",
      },
    ]
  }

  // --- MODIFICATION: Removed fallback to 'beauty-spa' ---
  const currentCategory = categoryData[categoryId]
  const services = allServices[categoryId] || []

  const sortOptions = [
    { value: "relevance", label: "Most Relevant" },
    { value: "rating", label: "Highest Rated" },
    { value: "reviews", label: "Most Reviews" },
    { value: "distance", label: "Nearest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ]

  const filterOptions = [
    { value: "all", label: "All Services" },
    { value: "verified", label: "Verified Only" },
    { value: "trending", label: "Trending" },
    { value: "open-now", label: "Open Now" }, // Mock open now logic
  ]

  const priceOptions = [
    { value: "all", label: "All Prices" },
    { value: "budget", label: "$ (Budget)" },
    { value: "moderate", label: "$$ (Moderate)" },
    { value: "expensive", label: "$$$ (Expensive)" },
    { value: "luxury", label: "$$$$ (Luxury)" },
  ]

  const ratingOptions = [
    { value: "all", label: "All Ratings" },
    { value: "4.5", label: "4.5+ Stars" },    { value: "4.0", label: "4.0+ Stars" },
    { value: "3.5", label: "3.5+ Stars" },
  ]

  // Filter and sort services
  const filteredServices = services
    .filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesFilter =
        filterBy === "all" ||
        (filterBy === "verified" && service.verified) ||
        (filterBy === "trending" && service.trending) ||
        (filterBy === "open-now" && true)

      const matchesPrice = priceRange === "all" || service.priceRange === priceRange

      const matchesRating = rating === "all" || service.rating >= Number.parseFloat(rating)

      return matchesSearch && matchesFilter && matchesPrice && matchesRating
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviewCount - a.reviewCount
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
        case "price-low":
          return a.price.length - b.price.length
        case "price-high":
          return b.price.length - a.price.length
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

  // --- NEW: Handle Category Not Found ---
  if (!currentCategory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-3xl shadow-sm p-8 text-center">
        <XCircle className="w-24 h-24 text-red-400 mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Category Not Found</h2>
        <p className="text-gray-600 text-lg mb-6">
          The category you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/categories"
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to All Categories</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`bg-gradient-to-br ${currentCategory.color} rounded-3xl shadow-sm p-8 text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Categories</span>
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">{currentCategory.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{currentCategory.name}</h1>
              <p className="text-xl text-white text-opacity-90">{currentCategory.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-white text-opacity-90">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{filteredServices.length}</span>
              <span>services found</span>
            </div>
            {filteredServices.length > 0 && (
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">
                  {(filteredServices.reduce((sum, s) => sum + s.rating, 0) / filteredServices.length).toFixed(1)}
                </span>
                <span>average rating</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder={`Search ${currentCategory.name.toLowerCase()} services...`}
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-4">            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Filter */}
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Rating */}
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {ratingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "grid" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "list" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}`}>
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {viewMode === "grid" ? (
              // Grid View
              <div>
                {/* Service Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">{currentCategory.icon}</div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {service.verified && (
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Verified className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    )}
                    {service.trending && (
                      <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />                        <span>Trending</span>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {service.price}
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-gray-500">({service.reviewCount})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{service.address}</span>
                      <span>•</span>
                      <span>{service.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.hours}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                      View Details
                    </button>
                    <button className="bg-gray-100 text-gray-700 p-2 rounded-xl hover:bg-gray-200 transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // List View
              <div className="p-6">
                <div className="flex space-x-6">
                  {/* Service Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">{currentCategory.icon}</div>
                  </div>

                  {/* Service Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {service.verified && (
                            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                              <Verified className="w-3 h-3" />
                              <span>Verified</span>                            </div>
                          )}
                          {service.trending && (
                            <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>Trending</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{service.rating}</span>
                          <span className="text-gray-500">({service.reviewCount})</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">{service.price}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3">{service.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{service.address}</span>
                        <span>•</span>
                        <span>{service.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{service.hours}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="bg-indigo-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                        View Details
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm("")
              setSortBy("relevance")
              setFilterBy("all")
              setPriceRange("all")
              setRating("all")
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Load More */}
      {filteredServices.length > 0 && (        <div className="text-center">
          <button className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Load More Services
          </button>
        </div>
      )}
    </div>
  )
}

export default CategoryServicesPage