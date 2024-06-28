import DomainCard from "../components/DomainCard"

const Products = () => {
    return (
        <main className="bg-b-100">
            <Header />
            <section className="mx-auto lg:w-4/5 lg:p-20 flex flex-wrap justify-center">
                <DomainCard linkto='/products/building_automation_control' imglink={"https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"}>Building Automation & Control</DomainCard>
                <DomainCard linkto='/products/industrial_automation_control' imglink={"https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.jpg?s=612x612&w=0&k=20&c=WgJLxtOWIGt80cbC0OFc3wQAhraIxlz_H7l-ySDxkOw="}>Industrial Automation & Control</DomainCard>
                <DomainCard linkto='/products/information_technology' imglink={"https://www.sansonetworks.com/images/products/img-data-center-infrastructure.png"}>IT & Networks</DomainCard>
                <DomainCard linkto='/products/internet_of_things' imglink={"https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?t=st=1719482547~exp=1719486147~hmac=e35e84121eac70aa81ff781408675f0e8f77671a6c13f4342fee623d363adefb&w=1380"}>Internet of Things</DomainCard>
                <DomainCard linkto='/products/field_devices' imglink={"https://esenssys.com/esssienew/wp-content/uploads/2020/05/sensors-industrial-automation-applications-es-systems.jpg"}>Field Devices</DomainCard>
            </section>
        </main>
    )
}

const Header = () => {
    return (
        <section id="header" className='relative z-10 left-0 top-0 w-full h-[300px] xl:h-[460px] flex items-center lg:mb-10 border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl overflow-clip' style={{backgroundImage:"url(https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/cityscape-photography/cityscape-photography_fb-img_1200x800.jpg)", backgroundPosition: "100% 10%"}}>
            <div className="h-full w-full bg-black/30" aria-hidden="true" />
            <h1 className='absolute bottom-16 left-[10%] text-5xl xl:text-6xl font-bold text-white z-20'>Our Products & Solutions</h1>
        </section>
    ) 
}

export default Products