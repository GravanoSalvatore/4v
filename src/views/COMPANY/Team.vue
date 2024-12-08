<!-- <template lang="">
    <div style="background-color:#091520;">
       
      <br/><br/><br/><br/>
            <div   class="container px-4 px-lg-5">
             
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7">
                        <img style="border-radius:25px" class="img-fluid img  mb-lg-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4 style="color: rgba(120, 98, 185, 1);" class="text-success">DEVOPS SERVICES AND SOLUTIONS
                            </h4>
                            <p class="text-white-50 mb-0 ">We're here to help you find the best solution. We aim to create a dedicated development team for you as quickly as possible so that you can scale up swiftly.
                            </p>
                        </div>
                    </div>
                </div>
              
                <div class="row gx-0 mb- mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://habrastorage.org/files/d16/3b9/9b1/d163b99b1201474e9c29a9e67d091324.jpg" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class=" text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
        <h4 style="color: rgba(120, 98, 185, 1);" class="text-success ">DATABASE ADMINISTRATION SERVICES
                                    </h4>
                                    <p class="mb-0 text-white-50  ">Maximize your Company's Actual Capability with Our Services. We Maintain the Stability of Your Database System by Ensuring Timely Administration.
                                        .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://media.istockphoto.com/id/1322050853/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2dWoVc-FE7MiTQUo_3niGFJAHPDGAPRwbMQut3iB2Uw=" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class=" text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
       <h4 style="color: rgba(120, 98, 185, 1);" class="text-success ">CUSTOM SOFTWARE SOLUTIONS DEVELOPMENT</h4>
                                    <p class="mb-0 text-white-50 ">We create innovative custom solutions that add value to our clients' processes with the highest quality, attention, and professionalism. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-0 mb- mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src="https://img.freepik.com/premium-photo/portrait-black-man-as-computer-programmer-looking-camera-while-writing-code-office-workplac_236854-44721.jpg" alt="..." /></div>
                <div class="col-lg-6">
                    <div class=" text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 style="color: rgba(120, 98, 185, 1);" class="text-success  ">CUSTOM WEB DEVELOPMENT SERVICES
                                </h4>
                                <p class="mb-0 text-white-50  ">Speed up your digital transformation with our expertise in web development
                                    .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">
                    <img class="img-fluid" src="https://media.istockphoto.com/id/1372353160/photo/young-asian-programmer-working-at-office.jpg?s=612x612&w=0&k=20&c=LO6IHvBGpqS798EZ6rmoJ8XtPs5iureu-pl38V1WxuA=" alt="..." /></div>
                <div class="col-lg-6 order-lg-first">
                    <div class=" text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 style="color: rgba(120, 98, 185, 1);" class="text-success">GOOGLE CLOUD DEVELOPMENT SERVICES</h4>
                                <p class="mb-0 text-white-50  ">Our company offers comprehensive Google Cloud app development and consulting services catering to business needs. We take a holistic approach to analyzing your project requirements and develop effective cloud implementation strategies that can boost your business productivity. Our team of developers is proficient in utilizing various GCP tools and services to create high-performing applications that can be easily scaled up. With our Google Cloud application development services, enterprises can fortify their IT infrastructure and streamline their business operations with enhanced security, scalability, accessibility, and interoperability. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
       
  
</template>
<script>
export default {
    
}
</script>
<style scoped lang="css">
    img{border-radius: 25px;}
</style> -->

<template lang="">
    <div class="" style="background-color:#091520;">
        <br/><br/><br/>
        <div class="container px-4 px-lg-5 card1">
            <!-- Информация о команде -->
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-12 text-center">
                    <h2 class="text-white mt-4">{{$t('team title')}}</h2>
                    <p class="text-white-50">
                       {{$t('team text')}}
                    </p>
                </div>
            </div>

            <!-- Featured Project Row-->
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7">
                    <div class="img-container">
                        <img class="img-fluid img mb-lg-0" src="https://mc.today/wp-content/uploads/2021/02/Depositphotos_383452398_s-2019.jpg" alt="..." />
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4 class="">Иван Коваленко — CEO (Канада)</h4>
                        <p class="text-white-50 mb-0">Иван Коваленко живет в Канаде и возглавляет нашу команду как генеральный директор. Его опыт и лидерские качества позволяют нам двигаться вперед к инновациям и успеху.</p>
                    </div>
                </div>
            </div>

            <!-- Project One Row-->
            <div class="row gx-0 mb- mb-lg-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://habrastorage.org/files/d16/3b9/9b1/d163b99b1201474e9c29a9e67d091324.jpg" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="">Питер ван дер Хук — Главный разработчик (Нидерланды)</h4>
                                <p class="mb-0 text-white-50">Питер является главным разработчиком, и он отвечает за все технические аспекты разработки нашего продукта. Его знания и опыт позволяют нам создавать надежные решения.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Two Row-->
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://media.istockphoto.com/id/1322050853/photo/programmer-woman-coding-on-computer.jpg?s=612x612&w=0&k=20&c=2dWoVc-FE7MiTQUo_3niGFJAHPDGAPRwbMQut3iB2Uw=" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6 order-lg-first">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="">Марта Лаане — IT-специалист и маркетолог (Эстония)</h4>
                                <p class="mb-0 text-white-50">Марта отвечает за маркетинг и IT-инфраструктуру, обеспечивая стабильную работу и продвижение наших продуктов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Three Row-->
            <div class="row gx-0 mb- mb-lg-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://img.freepik.com/premium-photo/portrait-black-man-as-computer-programmer-looking-camera-while-writing-code-office-workplac_236854-44721.jpg" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="">Марк Янсен — Разработчик (Нидерланды)</h4>
                                <p class="mb-0 text-white-50">Марк занимается интерфейсами и интеграциями, обеспечивая пользователям простоту и удобство использования.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Four Row-->
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://media.istockphoto.com/id/1372353160/photo/young-asian-programmer-working-at-office.jpg?s=612x612&w=0&k=20&c=LO6IHvBGpqS798EZ6rmoJ8XtPs5iureu-pl38V1WxuA=" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6 order-lg-first">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="">Джон Карлсон — Разработчик (Канада)</h4>
                                <p class="mb-0 text-white-50">Джон — разработчик, специализирующийся на работе с новыми технологиями и оптимизацией рабочих процессов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Дополнительные члены команды -->
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://mc.today/wp-content/uploads/2020/09/Depositphotos_208630424_l-2015.jpg" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="">Томас Смит — Разработчик (Канада)</h4>
                                <p class="mb-0 text-white-50">Томас участвует в разработке и поддержке серверных компонентов наших систем.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img class="img-fluid" src="https://i.work.ua/article/2492b.jpg?v=1713862817" alt="..." />
                    </div>
                </div>
                <div class="col-lg-6 order-lg-first">
                    <div class="text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="">Микк Тийк — Разработчик (Эстония)</h4>
                                <p class="mb-0 text-white-50">Микк занимается интеграцией новых решений и поддержкой наших программных продуктов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<br/>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Общие стили */
img {
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-container:hover img {
  transform: scale(1.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.project-text {
  transition: color 0.3s ease;
}

.img-container:hover .project-text {
  color: rgba(120, 98, 185, 1);
}

.img-container {
    border-radius: 25px;
  overflow: hidden;
  position: relative;
}

.img-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

p { padding: 5px; }
h4 { color:  orange; padding-left: 5px; }

.img-container:hover::before {
  background-color: rgba(0, 0, 0, 0.4);
}
.card1:hover {
    /* box-shadow: inset 0 10px 30px rgba(0, 255, 255, 0.5); */
  /* Тень активируется при наведении */
  /* box-shadow: inset 0px 10px 30px  aqua; */
  border-radius: 25px;
}
</style>
