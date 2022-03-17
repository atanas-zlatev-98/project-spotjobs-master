import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoOne from '../Style/Images/Logos/logo_.png';
import logoTwo from '../Style/Images/Logos/logo_2.png';
import logoThree from '../Style/Images/Logos/logo_3.png';
import logoFour from '../Style/Images/Logos/logo_4.png';
import logoFive from '../Style/Images/Logos/logo_5.png';
import CountUp from 'react-countup';
import '../Style/custom_style.scss';
import Footer from '../Components/Footer/Footer';
function Home(props) {
    return (
     <>
        <div className="main-page">
            <div className='something'>

         <p className='spacer pb-5'></p>

         <div className='container mt-3 pt-5 d-flex justify-content-center flex-column'>

         <h1 className='h1-main-page mt-5 mb-5'>Най-лесният начин да намерите новата си работа</h1>

         {/*<p className='p-main-page'>Всеки месец повече от 3 милиона търсещи работа се обръщат към уебсайта в търсене на работа, като подават над 140 000 заявления всеки ден</p>*/}
             
         <div class="container">
  <div class="row">
    <div class="col-sm mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Име,Компания..."/>
    </div>
    <div class="col-sm mb-3">
    <select className="form-select" aria-label="Default select example">
                    <option >Моля Изберете Локация</option>
                    <option value="1">гр.София</option>
                    <option value="2">гр.Пазарджик</option>
                    <option value="3">гр.Пловдив</option>
                </select>
    </div>
    <div class="col-sm mb-3">
    <select className="form-select" aria-label="Default select example">
                    <option>Моля Изберете Сфера</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
    </div>
    <div className='col-sm'>
    <button type="button" className="btn btn-outline-light button-search-main"><FontAwesomeIcon icon={faSearch} />Търсене</button>
    </div>
  </div>
   </div>

      
      <div className='container dont-display-mobile'>
      <div className='col-sm'>
      <div className='row d-flex'>
            <div className='pt-5 d-flex flex-row align-items-center p-trending'>Актуални ключови думи:  
            <div className='d-flex flex-row'>
                <a className='trending' href='#'>UI/UX Desighner</a>
                <a className='trending' href='#'>Java</a>
                <a className='trending' href='#'>React</a>
                <a className='trending' href='#'>Wordpress</a>
                <a className='trending' href='#'>Freelancer</a>
            </div></div>
    
        </div>
    </div>

      </div>
      </div>
      </div>
        <p className='spacer'></p>
        <div className='container'>
            <div className='row left-b'>
            <h1 >Намерете идеалната за вас работа</h1>
            <p >Търсете по избрана от вас категория</p>
            </div>

            <div className='row mb-3 mt-5'>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-tele'></div>
                    <h6 className='h6-job-type'>Телекомуникация</h6>
                    <p>250 Оферти</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-dev'></div>
                    <h6 className='h6-job-type'>Разработка на Софтуер</h6>
                    <p>Над 1000 Оферти</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-marketing'></div>
                    <h6 className='h6-job-type'>Маркетинг</h6>
                    <p>Над 500 Обяви</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-const'></div>
                    <h6 className='h6-job-type'>Стройтелство</h6>
                    <p>Над 1000 Обяви</p>
                </div>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                   <div className='icon-place'></div>
                    <h6 className='h6-job-type'>Финанси</h6>
                    <p>Над 250 Обяви</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-prod'></div>
                    <h6 className='h6-job-type'>Промишленост</h6>
                    <p>Над 200 Обяви</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center'>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-design'></div>
                    <h6 className='h6-job-type'>Дизайн</h6>
                    <p>Над 300 Обяви</p>
                </div>
                </div>
                <div className='col d-flex justify-content-center '>
                <div className='job-type d-flex align-items-center flex-column mb-3'>
                <div className='icon-place-cs'></div>
                    <h6 className='h6-job-type'>Поддръжка</h6>
                    <p>250 Job offers</p>
                </div>
                </div>
                <div className='d-flex justify-content-center mt-5 mb-5'> <button type="button" className="btn btn-primary btn-all-jobs"><FontAwesomeIcon icon={faSearch} />Вижте Всички Обяви</button></div>
                <div className='container d-flex flex-column'>
                    <div className='d-flex flex-row align-items-center style-logos mb-3'>
                       <div className='col'>
                           <img className='logos' src={logoOne}></img>
                       </div>
                       <div className='col d-flex flex-column'>
                         <p  className='p-text-jobs'><b>@Tempest</b></p>
                         <p>Front-end Developer</p>
                       </div>
                       <div className='col pb-3'>София, България</div>
                       <div className='col d-flex flex-column align-items-center'>
                           <p className='job-fulltime'>Пълно работно време</p>
                           <p>Заплата: 3900лв бруто</p></div>
                    </div>
                    <div className='d-flex flex-row align-items-center style-logos mb-3'>
                       <div className='col'>
                           <img className='logos' src={logoTwo}></img>
                       </div>
                       <div className='col d-flex flex-column'>
                         <p  className='p-text-jobs'><b>@CD Project Dark</b></p>
                         <p>Full Stack Web Developer</p>
                       </div>
                       <div className='col pb-3'>Пловдив, България</div>
                       <div className='col d-flex flex-column align-items-center'>
                           <p className='job-fulltime'>Пълно работно време</p>
                           <p>Заплата: 5500лв бруто</p></div>
                    </div>
                    <div className='d-flex flex-row align-items-center style-logos mb-3'>
                       <div className='col'>
                           <img className='logos' src={logoThree}></img>
                       </div>
                       <div className='col d-flex flex-column'>
                         <p  className='p-text-jobs'><b>@WolfNef</b></p>
                         <p>C# Developer</p>
                       </div>
                       <div className='col pb-3'>София, България</div>
                       <div className='col d-flex flex-column align-items-center'>
                           <p className='job-temporary'>Временна работа</p>
                           <p>Заплата: По Договаряне</p></div>
                    </div>
                    <div className='d-flex flex-row align-items-center style-logos mb-3'>
                       <div className='col'>
                           <img className='logos' src={logoFour}></img>
                       </div>
                       <div className='col d-flex flex-column'>
                         <p  className='p-text-jobs'><b>@HoundBG</b></p>
                         <p>Java Developer</p>
                       </div>
                       <div className='col pb-3'>София, България</div>
                       <div className='col d-flex flex-column align-items-center'>
                           <p className='job-halftime'>Половин работно време</p>
                           <p>Заплата: 2000лв бруто</p></div>
                    </div>
                    <div className='d-flex flex-row align-items-center style-logos mb-3'>
                       <div className='col'>
                           <img className='logos' src={logoFive}></img>
                       </div>
                       <div className='col d-flex flex-column'>
                         <p className='p-text-jobs'><b>@SharkBite</b></p>
                         <p>React Developer</p>
                       </div>
                       <div className='col pb-3'>София, България</div>
                       <div className='col d-flex flex-column align-items-center'>
                           <p className='job-fulltime'>Пълно работно време</p>
                           <p>Заплата: 9000лв бруто</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='counters'>
               <div className="container">

                 <h1 className='deinosti pt-5'>Дейности</h1>

                 <p className='deinosti-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis recusandae sequi excepturi corrupti.</p>
                      
                      <div class="row">

                        <div class="col-sm d-flex flex-column align-items-center">
                            
                            <div className='d-flex align-items-center'>
                                
                                <h1 className='deinosti'>+</h1>
                                    <CountUp className='countup-style' end={1500} duration={100}></CountUp>
       
                            </div>
                               <h1 className='countup-h1'>Кандидати</h1>
                        </div>


                <div className="col-sm d-flex flex-column align-items-center">
                    <div className='d-flex align-items-center'>
                        <h1 className='deinosti'>+</h1>
                            <CountUp className='countup-style' end={10000} duration={100}></CountUp>
                    </div>
                        <h1 className='countup-h1'>Обяви</h1>
                    </div>

                <div className="col-sm d-flex flex-column align-items-center">
                    <div className='d-flex align-items-center'>
                        <h1 className='deinosti'>+</h1>
                            <CountUp className='countup-style' end={500} duration={100}></CountUp>
                        </div>
                            <h1 className='countup-h1'>Намерили Работа</h1>
                </div>

            <div class="col-sm d-flex flex-column align-items-center mb-3">

                 <div className='d-flex align-items-center'>
                    <h1 className='deinosti'>+</h1>
                        <CountUp className='countup-style' end={700} duration={100}></CountUp>
                 </div>
                        <h1 className='countup-h1'>Фирми</h1>
            </div>

                    </div>
                    </div>
                    </div>

        <div className='happy-clients pb-5'> 
                <h1 className='deinosti text-black pb-5 pt-5'>Доволни Клиенти</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm d-flex align-items-center flex-column mb-3">
                           <div className='photo mb-2' id='face_one'></div>
                           <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                           <h1>Виктор Николов</h1>
                           <h4>SharkDesign</h4>
                            </div>

                            <div className="col-sm d-flex align-items-center flex-column mb-3">
                           <div className='photo mb-2' id='face_two'></div>
                           <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                           <h1>Георги Димитров</h1>
                           <h4>JavaCorp</h4>
                            </div>

                            <div className="col-sm d-flex align-items-center flex-column mb-3">
                           <div className='photo mb-2' id='face_three'></div>
                           <p className='text-center'>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.
                                Lorem Ipsum е индустриален стандарт от около 1500 година</p>
                           <h1>Пламен Георгиев</h1>
                           <h4>WebMasters</h4>
                            </div>

                            </div>
                    </div>
                        </div>

                <div className='google-maps'>
                   <h1 className='text-center mb-5'>Къде може да ни намерите?</h1>
                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=pazardjik&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">how to add a google map to html</a></div></div>
                
                </div>

                <div className='footers'>
                <Footer></Footer>
                </div>
                            </div>
                           

        
        </>
 )
}
export default Home;