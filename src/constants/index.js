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
        title: "Products",
        url: "/products",
        onlyMobile:false
    },
    {
        id: "3",
        title: "Solutions & Services",
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

export const productitems = [
    {
        id: "0",
        title: "Building Automation",
        url: "/products/building_automation"
    },
    {
        id: "1",
        title: "DCIM",
        url: "/products/dcim"
    },
    {
        id: "2",
        title: "Facility Management",
        url: "/products/facility_management"
    },
    {
        id: "3",
        title: "Power Management",
        url: "/products/power_management"
    },
    {
        id: "4",
        title: "Safety & Security",
        url: "/products/safety_security"
    }
]

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

//Who we are Component
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

//Domains component
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



//products
//building management systems
export const bmsproducts = [
    {
        id: "0",
	    name: "EcoStruxure™ Building Advisor",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=EcoStruxure-Building-Advisor&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Building management services with HVAC analytics",
	    link: "https://www.se.com/us/en/product-range/39297330-ecostruxure-building-advisor/#overview",
    },
    {
        id: "1",
	    name: "Automation Server - Premium",
	    img: "https://ecostruxure-building-help.se.com/graphics/en-US/graphics380918.png",
	    desc: "Core of the Management System",
	    link: "https://www.se.com/in/en/download/document/03-14020-en/",
    },
    {
        id: "2",
	    name: "Room Purpose Controller",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=range-66378&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "IP-enabled BACnet room controller",
	    link: "https://www.se.com/us/en/product-range/66378-connected-room-solution/?parent-subcategory-id=104130293&filter=business-2-building-automation-and-control",
    },
    {
        id: "3",
	    name: "Multiple Purpose Controller",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=MP-C-24A-M_EasyLogic&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Building management services with HVAC analytics",
	    link: "https://www.se.com/us/en/product-range/39297330-ecostruxure-building-advisor/#overview",
    },
];

//building operation system
export const bosproducts = [
    {
        id: "0",
	    name: "Building Operation Software",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=EcoStruxure-Building-Operation&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "A single solution for your complex needs",
	    link: "https://www.se.com/in/en/product-range/62111-ecostruxure-building-operation-software/",
    },
    {
        id: "1",
	    name: "IP-IO Modules",
	    img: "https://ecostruxure-building-help.se.com/graphics/en-US/graphics255400.png",
	    desc: "I/O expansion to your HVAC application ",
	    link: "https://ecostruxure-building-help.se.com/bms/topics/show.castle?id=12493&locale=en-US&productversion=2.0",
    },
]

//power management system
export const pmsproducts = [
    {
        id: "0",
	    name: "EcoStruxure™ Power Monitoring Expert",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=EcoStruxure_PME_Range&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Energy supply management software for large sites",
	    link: "https://www.se.com/in/en/product-range/65404-ecostruxure-power-monitoring-expert/#overview",
    },
    {
        id: "1",
	    name: "EcoStruxure™ Power Operation",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=Power_Operation_web-only&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Energy supply management software for electro-intensive sites",
	    link: "https://www.se.com/in/en/product-range/65405-ecostruxure-power-operation/#overview",
    },
    {
        id: "2",
	    name: "PowerLogic™ PowerTag",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=PB120401&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Wireless energy sensor",
	    link: "https://www.se.com/in/en/product-range/63626-powerlogic-powertag/",
    },
    {
        id: "3",
	    name: "PowerLogic™ PM5000 series",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=RDS_61281_PM5000_series&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "High-end cost management capabilities in an affordable power meter",
	    link: "https://www.se.com/hk/en/product-range/61281-powerlogic-pm5000-series/",
    },
    {
        id: "4",
	    name: "PowerLogic™ ION9000",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=ION9000_web_only&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Advanced power quality meets unparalleled innovation",
	    link: "https://www.se.com/in/en/product-range/64241-powerlogic-ion9000/",
    },
    {
        id: "5",
	    name: "PowerLogic™ ION8650 Power Quality Meters",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=61053_main&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Revenue and power quality power meters",
	    link: "https://www.se.com/in/en/product-range/61053-powerlogic-ion8650-power-quality-meters/",
    },
    {
        id: "6",
	    name: "Digital AMP / VLT / FRE",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=RDS-994_%28web-only%29&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "DIN-rail mounted ammeter - voltmeter - frequencemeter",
	    link: "https://www.se.com/in/en/product-range/994-digital-amp-vlt-fre/",
    },
    {
        id: "7",
	    name: "PM2000 series",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=63370_image-of-range&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "EasyLogic Power & Energy meter POP/RS,IO",
	    link: "https://www.se.com/us/en/product-range/63370-pm2000-series/",
    },
]

//safety & security
export const fireproducts = [
    {
        id: "0",
        name: "Esmi Fire Detection Panels UL",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_Ultima_Fire_alarm_Panel&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "Flexible, analogue addressable UL 864 approved fire alarm panels",
        link: "https://www.se.com/in/en/product-range/66361-esmi-fire-detection-panels-ul/?parent-subcategory-id=86785",
    },
    {
        id: "1",
        name: "Esmi Conventional Components",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_range_photo_conven_UL&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "Conventional detection products and components",
        link: "https://www.se.com/in/en/product-range/66363-esmi-conventional-components-ul/?parent-subcategory-id=86785",
    },
    {
        id: "2",
        name: "Esmi Addressable Components",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_Addressable_range_photo&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "High quality addressable detection components for all needs",
        link: "https://www.se.com/in/en/product-range/66362-esmi-addressable-components-for-ultima-range-ul/?parent-subcategory-id=86785",
    },
    {
        id: "3",
        name: "Esmi Fire Detection Panels EN 54",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_fire_detection_panels_vs1&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "Modular, user-friendly fire detection panels",
        link: "https://www.se.com/in/en/product-range/63651-esmi-fire-detection-panels-en-54/?parent-subcategory-id=86785",
    },
    {
        id: "4",
        name: "Esmi Addressable Components EN 54",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_addressable_components_for_alc_range&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "High quality detection products and components for all needs",
        link: "https://www.se.com/in/en/product-range/63652-esmi-addressable-components-for-alc-range-en-54/?parent-subcategory-id=86785",
    },
    {
        id: "5",
        name: "Esmi Conventional Components EN 54",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Esmi_conventional_components&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "High quality conventional detection products",
        link: "https://www.se.com/in/en/product-range/63654-esmi-conventional-components-en-54/?parent-subcategory-id=86785#overview",
    },
    {
        id: "6",
        name: "Esmi Fire Software",
        img: "https://download.schneider-electric.com/files?p_Doc_Ref=Ecostruxure_Fire_Expert&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        desc: "Online application for Esmi fire detection systems",
        link: "https://www.se.com/in/en/product-range/63656-esmi-fire-software-and-online-applications/?parent-subcategory-id=86785#overview",
    },
]

//dcim 
export const dcimproducts = [
    {
        id: "0",
	    name: "Galaxy UPS",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=GalaxyVL_RNG_V&p_File_Type=rendition_369_jpg",
	    desc: "Highly efficient, simple-to-deploy, compact 3-phase UPS power protection",
	    link: "https://www.se.com/in/en/work/products/master-ranges/galaxy/",
    },
    {
        id: "1",
	    name: "Galaxy Li-Ion Battery Systems",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=GalaxyLithium-ion__RNG&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "A compact, lightweight and long-lasting battery solution for UPS",
	    link: "https://www.se.com/in/en/product-range/66102-galaxy-lithiumion-battery-systems/?parent-category-id=8000&parent-subcategory-id=8030&filter=business-3-critical-power-cooling-and-racks",
    },
    {
        id: "2",
	    name: "SpaceLogic Communicating Sensors",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=comm-sensors-range-image&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Comprehensive sensing, high comfort experience",
	    link: "https://www.se.com/in/en/product-range/8297100-spacelogic-communicating-sensors/?parent-category-id=88878&parent-subcategory-id=89226&filter=business-2-building-automation-and-control",
    },
    {
        id: "3",
	    name: "Smart-UPS",
	    img: "https://www.se.com/in/en/assets/v2/380/media/8113/900/SmartUPS_Family_LCD_Reflc-IC-900x500.jpg",
	    desc: "protect equipment and critical data from costly interruptions",
	    link: "https://www.se.com/in/en/work/products/master-ranges/smart-ups/",
    },
    {
        id: "4",
	    name: "EcoStruxure™ Building Advisor",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=EcoStruxure-Building-Advisor&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Building management services with HVAC analytics",
	    link: "https://www.se.com/us/en/product-range/39297330-ecostruxure-building-advisor/#overview",
    },
    {
        id: "5",
	    name: "Automation Server - Premium",
	    img: "https://ecostruxure-building-help.se.com/graphics/en-US/graphics380918.png",
	    desc: "Core of the Management System",
	    link: "https://www.se.com/in/en/download/document/03-14020-en/",
    },
    {
        id: "6",
	    name: "Room Purpose Controller",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=range-66378&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "IP-enabled BACnet room controller",
	    link: "https://www.se.com/us/en/product-range/66378-connected-room-solution/?parent-subcategory-id=104130293&filter=business-2-building-automation-and-control",
    },
    {
        id: "7",
	    name: "Multiple Purpose Controller",
	    img: "https://download.schneider-electric.com/files?p_Doc_Ref=MP-C-24A-M_EasyLogic&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
	    desc: "Building management services with HVAC analytics",
	    link: "https://www.se.com/us/en/product-range/39297330-ecostruxure-building-advisor/#overview",
    },
]