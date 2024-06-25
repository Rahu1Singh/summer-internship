//Links
//NavBar Links
export const navbaritems = [
    {
        id: "0",
        title: "Home",
        url: "/",
        onlyMobile:false
    },
    {
        id: "1",
        title: "About Us",
        url: "/about",
        onlyMobile:false
    },
    {
        id: "2",
        title: "Products & Solutions",
        url: "/products/building_automation_control",
        onlyMobile:false
    },
    {
        id: "3",
        title: "Services",
        url: "/services",
        onlyMobile:false
    },
    {
        id: "4",
        title: "Contact Us",
        url: '/contact',
        onlyMobile:true
    }
]

//Products dropdown
export const productitems = [
    {
        id: "0",
        title: "Building Automation & Control",
        url: "/products/building_automation_control"
    },
    {
        id: "1",
        title: "Process Automation",
        url: "/products/process_automation"
    },
    {
        id: "2",
        title: "Food & Beverages",
        url: "/products/food_and_beverages"
    },
]

//Building Automation and Control Subtopics
export const bacitems = [
    {
        id: "0",
        title: "Building Management",
        url: "/products/building_automation_control/building_management"
    },
    {
        id: "1",
        title: "Power Management",
        url: "/products/building_automation_control/power_management"
    },
    {
        id: "2",
        title: "DCIM",
        url: "/products/building_automation_control/dcim"
    },
    {
        id: "3",
        title: "Safety & Security",
        url: "/products/building_automation_control/safety_security"
    }
]

//content for homepage hero
export const herotext = [
    {
        id: "0",
        text: "Efficiency Amplified: Redefining Industry Standards in Automation & IT Solutions."
    },
    {
        id: "1",
        text: "Streamlined Excellence: Your Partner in Simplifying Processes and Maximizing Results."
    },
    {
        id: "2",
        text: "Pioneering Innovation: Crafting Complete and Effective Products for Your Business Needs."
    }
]

//about us page who we are Component
import {professional,experience,certified,iso,location,hikvision, foodandbeverages} from "../assets"
export const whoweareitems = [
    {
        id: "0",
        title: "Experienced Professionals",
        text: "Started by experienced automation professionals in the automation industry, to provide innovative solutions in Automation, IT and Engineering",
        icon: professional,
    },
    {
        id: "1",
        title: "21 Years Of Experience",
        text: "Over 21 years of Project Design, Engineering, Programming, Testing & commissioning experience in Process Automation, Building Automation & Software Development",
        icon: experience,
    },
    {
        id: "2",
        title: "BizSAFE & EcoXpert Certified",
        text: " Ingenium Automation + Engineering a BizSAFE star certified Company & EcoXpert Certified partner with Schneider Electric in Singapore",
        icon: certified,
    },
    {
        id: "3",
        title: "ISO Certified",
        text: "Ingenium Singapore is ISO 9001:2015 , ISO 45001 : 2018 & ISO 14001 : 2015 Certified Company",
        icon: iso,
    },
    {
        id: "4",
        title: "Ingenium @ India",
        text: "Ingenium\'s origin extended to India in 2017 as Ingenium Automation India Private Limited an EcoXpert certified partner to Schneider Electric India",
        icon: location,
    },
    {
        id: "5",
        title: "Authorized HikVision System Integrator",
        text: "Ingenium Automation is an authorized System Integrator of Hikvision in CCTV & Access Control System.",
        icon: hikvision,
    },
]

//about us page domains we serve component
import {healthcare,airports,datacenter,lifescience,hotels,commercialestates} from "../assets"
export const domainitems = [
    {
        id: "0",
        text: "Data Center",
        icon: datacenter,
    },
    {
        id: "1",
        text: "Healthcare",
        icon: healthcare,
    },
    {
        id: "2",
        text: "Airports",
        icon: airports,
    },
    {
        id: "3",
        text: "Life Science",
        icon: lifescience,
    },
    {
        id: "4",
        text: "Hotels",
        icon: hotels,
    },
    {
        id: "5",
        text: "Commercial Estates",
        icon: commercialestates,
    },
    {
        id: "6",
        text: "Food & Beverages",
        icon: foodandbeverages,
    }
]

//dcim page operations component
import {change, cooling, energy, quality, server} from "../assets"
export const dcimops = [
    {
        id: "0",
        text: "Capacity",
        icon: datacenter,
    },
    {
        id: "1",
        text: "Energy Efficiency",
        icon: energy,
    },
    {
        id: "2",
        text: "Cooling Optimization",
        icon: cooling,
    },
    {
        id: "3",
        text: "Server Access",
        icon: server,
    },
    {
        id: "4",
        text: "Change",
        icon: change,
    },
    {
        id: "5",
        text: "Capacity",
        icon: quality,
    },
    {
        id: "6",
        text: "StruxureWare Operation",
        icon: certified,
    }
]