const elForm = document.querySelector ("form");
const elInput = document.querySelector (".content__input");
const elRegion = document.querySelector (".region-wrapper");

elForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
    console.log("salom");
    const inputText = elInput.value;
    elRegion.innerHTML = " ";
    switch (inputText) {
        // Toshkent
        case "Toshkent":
            elRegion.innerHTML = `
            <div class="region">
                <!-- About -->
                <section class="region__about">
                    <h2 class="region__about-title">Toshkent - Zamonaviy megapolis
                    </h2>
                    <p class="region__about-text">Toshkent – O‘zbekistonning poytaxti va shu bilan birga Markaziy Osiyodagi eng yirik shahardir.Ko'p yillar davomida Toshkent butun dunyodan sayyohlar va ishbilarmonlarni jalb qiladigan mamlakatning eng muhim biznes va madaniy markazi bo'lib kelgan.</p>
                    <img class="region__about-img" src="img/hilton.jpg" alt="Hilton hotel">
                </section>
                
                <!-- Attractions -->
                <section class="region__attractions">
                    <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                    <p class="region__attractions-text">Toshkentda tashrif uchun bir necha kun kerak bo‘ladigan diqqatga sazovor joylarning ro‘yxati juda katta.</p>
                    <ul class="region__attracions-list">
                        <li class="region__attracions-item">✔️ Sayr qilish uchun keng va yashil xiyobonlar,   favvoralar va ekologik bog‘lar;
                        </li>
                        <li class="region__attracions-item">✔️ Shahardagi ko‘plab muzeylarda O‘rta Osiyo xalqlari tarixi va madaniyati haqidagi noyob asarlar;
                        </li>
                        <li class="region__attracions-item">✔️Buyuk me'moriy ansambllar, masjidlar va minoralar;
                        </li>
                        <li class="region__attracions-item">✔️ Har didga mos teatr va galereyalar.
                        </li>
                    </ul>
                </section>
                
                <!-- Climate -->
                <section class="region__climate">
                    <h2 class="region__climate-title">Iqlim 🌡</h2>
                    <p class="region__climate-text">Toshkentda yozning katta qismi jazirama bo‘ladi, shuning uchun quyosh kremi va bosh kiyimini unutmang! Qish asosan yumshoq va qorsiz, lekin issiq kiyimlarni eʼtiborsiz qoldirmang, kechqurunlari shunday sovuq bo‘ladiki, sharf kiyishni istab qolasiz!
                    </p>
                </section>

                <!-- Souvenir -->
                <section class="region__souvenir">
                    <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                    </h2>
                    <p class="region__souvenir-text">Toshkent ko‘chalarida sayr qilib, mayda bezaklardan tortib ulkan esdalik sovg‘alarga qadar ko‘plab sovg‘alarni topishingiz mumkin. Esdalik sovg‘alari bilan savdo qiladigan ustaxonalarning aksariyati eski madrasalarda va Chorsu bozorida joylashgan. U yerda siz deyarli hamma narsani topishingiz mumkin! Yog‘ochdan o‘yilgan mahsulotlar, kulolchilik buyumlari, milliy kiyimlar va hatto mahalliy temirchilik ustaxonalarida tayyorlangan pichoq va xanjarlar shular jumlasidandir!
                    </p>
                    <ul class="region__souvenir-list">
                        <li class="region__souvenir-item">
                            <img class="region__souvenir-img" src="img/chinni.jpg" alt="porcelain" width="350" height="200">
                        </li>
                        <li class="region__souvenir-item">
                            <img class="region__souvenir-img" src="img/choynak.jpg" alt="kettle" width="350" height="200">
                        </li>
                        <li class="region__souvenir-item">
                            <img class="region__souvenir-img" src="img/pichoq.jpg" alt="knife" width="350" height="200">
                        </li>
                    </ul>
                </section>

                <!-- Kitchen -->
                <section class="region__kitchen">
                    <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                    <p class="region__kitchen-text">Toshkent restoranlari o‘zining rang-barangligi va xizmat ko‘rsatish darajasi bilan har qanday xushxo‘rni xursand qilishi mumkin. Shaharda nafaqat o‘z mazasi bilan boshqa hududlarda tayyorlanadigan taomlardan farq qiluvchi milliy taomlar, balki chet el gastronomiya sanoatining eng yaxshi namunalarini ham topishingiz mumkin. Toshkentda siz uyg‘ur, koreys, xitoy, yapon, Evropa va hatto molekulyar oshxonani sinab ko‘rishingiz mumkin. Lekin eng mazalisi tabiiyki o‘zbek taomlaridir! 2016 yilning dekabr oyida palov YUNESKOning nomoddiy meros ro‘yxatiga kiritilganligini bilasizmi? Endi bilib oldingiz! Dunyodagi eng mazali taomlarni o‘z ko‘zingiz bilan ko‘rib, tatib ko‘rishga shoshiling! O‘zbek taomlari haqida ko‘proq maʼlumotni ushbu havola orqali o‘qishingiz mumkin.
                    </p>
                    <ul class="region__kitchen-list">
                        <li class="region__kitchen-item">
                            <img class="region__kitchen-img" src="img/osh.jpg" alt="plow" width="350" height="200">
                        </li>
                        <li class="region__kitchen-item">
                            <img class="region__kitchen-img" src="img/shashlik.jpg" alt="kebab" width="350" height="200">
                        </li>
                        <li class="region__kitchen-item">
                            <img class="region__kitchen-img" src="img/moshxorda.jpg" alt="soup" width="350" height="200">
                        </li>
                    </ul>
                </section>

                 <!-- Video -->
                 <section class="region__video">
                    <h2 class="region__video-title">Toshkentda joylashgan Top 10ta joy</h2>
                    <iframe src="https://www.youtube.com/embed/06VHBldtsMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>

                <!-- gallery -->
                <section class="region__gallery">
                    <h2 class="region__gallery-title">Foto gallereya</h2>
                    <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                    </p>
                    <ul class="region__gallery-list">
                        <li class="region__gallery-item">
                            <img class="region__gallery-img" src="img/temur-hiyoboni.jpg" alt="Amir Temur hiyoboni" width="540" height="300">
                            <p class="region__gallery-img-text">Amir Temur hiyoboni</p>
                        </li>
                        <li class="region__gallery-item">
                            <img class="region__gallery-img" src="img/minor.jpg" alt="Minor masjidi" width="540" height="300">
                            <p class="region__gallery-img-text">☪️ Minor masjidi 2014 yilda qurilgan bo‘lib, u oq marmardan yasalgan va xushmanzara joyda joylashgan.
                            </p>
                        </li>
                        <li class="region__gallery-item">
                            <img class="region__gallery-img" src="img/hotel.jpg" alt="O'zbekiston mehmonxonasi" width="540" height="300">
                            <p class="region__gallery-img-text">O'zbekiston mehmonxonasi</p>
                        </li>
                        <li class="region__gallery-item">
                            <img class="region__gallery-img" src="img/bunyodkor.jpg" alt="Bunyodkor stadioni" width="540" height="300">
                            <p class="region__gallery-img-text">Bunyodkor stadioni</p>
                        </li>
                        <li class="region__gallery-item">
                            <img class="region__gallery-img" src="img/teleminora.jpg" alt="Teleminora" width="540" height="300">
                            <p class="region__gallery-img-text">Teleminora</p>
                        </li>
                    </ul>
                </section>

                <!-- Map -->
                <section class="region__map">
                    <h2 class="region__map-title">Toshkent xaritasi</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d383770.50861870154!2d69.279367!3d41.282597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1658383991146!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
            `
            break;
            // Andijon
            case "Andijon":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Andijon - Bobur shahri
                        </h2>
                        <p class="region__about-text">Andijon shahri - o‘zbek sheʼriyatining taniqli vakili, Mug‘allar sulolasining asoschisi, sarkarda va hukmdor Boburning vatani. Bir vaqtlar Buyuk Ipak yo‘li bo‘ylab joylashgan, arxeologik yodgorliklar va tarixiy obidalarga boy bo‘lgan shaharni , tashrif buyurishga tavsiya etamiz:
                        </p>
                        <img class="region__about-img" src="img/andijon.jpg" alt="Andijon">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Bobur bog‘i;
                            </li>
                            <li class="region__attracions-item">✔️ Jomiy meʼmoriy majmuasi;
                            </li>
                            <li class="region__attracions-item">✔️ Qutayba ibn Muslim maqbarasi;
                            </li>
                            <li class="region__attracions-item">✔️ Bibi Seshanba (muqaddas joy).
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Andijon ob-havosi butun vodiydagi ob-havodan ko‘p farq qilmaydi. Manfiy haroratlar ko‘p bo‘lmaydigan qish vaqti-vaqti bilan keskin sovuq tomon o‘zgarishi mumkin, ammo bu tez takrorlanmaydigan va ko‘pi bilan bir-ikki kunga cho‘ziladigan xolatdir.Shu uchun bunday paytlarda har doim zaxirada issiq narsalar bo‘lishi kerak.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Farg‘ona vodiysi o‘zining hunarmandchilik ustaxonalari bilan mashhur. Andijondan olib kelinadigan eng ko‘p sovg‘alar – kulolchilik, yog‘och o‘ymakorligi mahsulotlari va albatta xon atlas, adras va ipak kabi to‘qimachilik buyumlari hisoblanadi. Agar siz ozgina qimmatbaho vaqtingizni sarflab, Andijondan unchalik uzoq bo‘lmagan Shahrixon shahriga borsangiz, unda siz pichoqni sevadiganlar uchun jannatga tushasiz. U yerdagi barcha pichoqlar faqat qo‘lda yasaladi va ularning ishlab chiqarish sifati butun mamlakatga mashhur. Narxlar material sifati, toblash usuli va usta nomiga qarab farq qiladi. Pichoqlar va mahalliy sanʼatning boshqa esdalik buyumlarini sotib olayotganda, ustadan mahsulot suvenir ekanligini tasdiqlovchi sertifikat olishni unutmang.
                        </p>
                        <ul class="region__souvenir-list">
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/doppi.jpg" alt="Doppi" width="350" height="200">
                            </li>
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/shahrixon-pichoq.jpg" alt="shahrixon-pichoq" width="350" height="200">
                            </li>
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/naqsh.jpg" alt="naqsh" width="350" height="200">
                            </li>
                        </ul>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">O‘zbekistonning turli mintaqalarida go‘shtni qanday qilib benazir tayyorlashlari haqida ko‘p gapirish mumkin, ammo biz ushbu mavzudan yiroqlashib, Farg‘ona vodiysining serhosil yerlarida o‘sadigan mahsulotlar, hamda turli xil mevalar haqida gaplashamiz! Afsonaga ko‘ra, agar siz oddiy tayoqni olib, yerga suqib qo‘ysangiz, u ildiz otadi va albatta o‘z mevasini bera boshlaydi. Shaharga kiraverishda shoxlari pishgan mevalardan sinib ketayotgandek ko‘plab mevali daraxtlar bilan qoplangan bog‘larni ko‘rishingiz mumkin. Siz bu mevalarni shu joyning o‘zida tatib ko‘rishingiz yoki yo‘l bo‘yida sotib olishingiz mumkin. Kunning issiq jaziramasida muzdek silliq shaftolini tishlaganda uning sharbati yonoqdan oqib tushishini taʼriflashga so‘z ojiz. Bundan tashqari bu yerda yana bir qiziqarli ichimlik sotiladi ... Bu qora tut sharbati! Aytishlaricha, agar uni kuniga uch mahal ichsangiz, abadiy yashashingiz mumkin! Quritilgan mevalar to‘g‘risida ham gapirmaslikning iloji yo‘q. Quritilgan o‘rik, xurmo, olxo‘ri va choyga qo‘shib ichish yoki pistadek yeyish mumkin bo‘lgan quritilgan tut ham bor. Ushbu xilma-xillik orasida toshcho‘p, rayhon kabi tog‘ dorivor o‘simliklarini topish mumkin.<br> P.S. Palovni ham albatta tatib ko‘rish kerak! U o‘ziga xos taʼmi tufayli palov uchun juda mos keladigan guruchning alohida navi bo‘lmish devzira guruchidan tayyorlashadi.
                        </p>
                        <ul class="region__kitchen-list">
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/andijon-osh.jpg" alt="plow" width="350" height="200">
                            </li>
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/shaftoli.jpg" alt="Shaftoli" width="350" height="200">
                            </li>
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/anor.jpg" alt="granate" width="350" height="200">
                            </li>
                        </ul>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Andijon haqida video</h2>
                        <iframe src="https://www.youtube.com/embed/yNkFuuEwzTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/bobur-bog.jpg" alt="Bobur-bogi" width="540" height="300">
                                <p class="region__gallery-img-text">Bobur bog'i</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/jome-masjid.jpg" alt="Jome masjid" width="540" height="300">
                                <p class="region__gallery-img-text">Andijon jome masjidi
                                </p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/bibiseshanba.jpg" alt="Bibi Seshanba maqbarasi" width="540" height="300">
                                <p class="region__gallery-img-text">Bibi Seshanba maqbarasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/navoiy-bog.jpg" alt="Navoiy bogi" width="540" height="300">
                                <p class="region__gallery-img-text">Navoiy bogi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/ozbegim.jpg" alt="O'zbegim savdo majmuasi" width="540" height="300">
                                <p class="region__gallery-img-text">O'zbegim savdo majmuasi</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Andijon xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96678.76778807599!2d72.3196454!3d40.77936435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0!5e0!3m2!1sru!2s!4v1658411559431!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Namangan
            case "Namangan":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Namangan - gullar shahri
                        </h2>
                        <p class="region__about-text">"Gullar shahri" Namangan o'zining tarixiy lazzati, shinam ko'chalari va eski binolari bilan ajralib turadi. Bu erda bir qavatli an'anaviy uylar va g'ayrioddiy binolarni topishingiz mumkin:
                        </p>
                        <img class="region__about-img" src="img/namangan.jpg" alt="Namangan">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Mulla-Qirgiz madrasasi;
                            </li>
                            <li class="region__attracions-item">✔️ Namangani maqbarasi;
                            </li>
                            <li class="region__attracions-item">✔️ Afsona bog'i;
                            </li>
                            <li class="region__attracions-item">✔️ Bobur nomidagi madaniyat va istirohat bog'i;
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Namanganda qish juda yumshoq va manfiy haroratlar tez-tez uchrab turmaydi, ammo havo haroratining keskin sovishini ham ayrim paytlar kuzatish mumkin. Sayohat paytida issiq kiyimlarni ham eʼtibordan chetda qoldirmang. Yozda barqaror issiq bo‘ladi, bunday paytda bosh kiyimda yurish hamda iloji boricha ko‘proq suv ichish tavsiya etiladi.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Shaharda har doim g‘ayrioddiy suvenirlar yasaydigan hunarmandlar ko‘p bo‘lgan. Namangan bo‘ylab sayr qilsangiz, ko‘plab ustaxonalarni uchratishingiz mumkin va ularning har biri o‘ziga xosdir. Kulolchilik ustalari faqat ushbu shaharga xos bo‘lgan betakror uslubda bo‘yalgan laganlarni yaratadilar. Mahalliy mato alohida sifati bilan ajralib turadi, chunki shaharda paxtani qayta ishlash korxonalari mavjud va shu munosabat bilan 100 foiz paxtadan tayyorlangan mahsulotlar narxi nisbatdan past! Albatta, Namangan viloyatida joylashgan Chust shahri haqida ham unutmang. Qadim zamonlardan beri shaharning markazida temirchilarning butun bir dahasi joylashgan bo‘lib, u yerda qulayligi bilan ajralib turadigan dunyoga mashhur pichoqlar yaratiladi. Ushbu noyob pichoqlarni tayyorlash texnikasi bizga asrlar osha yetib kelgan. Ishlab chiqarilgan joyi va uni yaratgan usta ismi har bir pichoqqa yozilib, tutqichlar esa o‘zgacha ilhom bilan yaratilgan! Ular turli xil shaklda, eng oddiyidan tortib to qimmatiga qadar ishlab chiqariladi. Oddiy tutqichlar uchun plastmassa, organik oyna yoki qattiq turdagi daraxtlar ishlatiladi. Fil suyagi, sayg‘oq yoki kiyik suyagidan yasalgan qimmatbaho tutqichlar marvarid, kumush yoki rangli toshlar bilan bezatilib, ko‘zni qamashtiradi, naqshinkor va o‘yma naqshlar bilan bezatilgan metall esa zavq bag‘ishlaydi.
                        </p>
                        <ul class="region__souvenir-list">
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/quti.jpg" alt="Quti" width="350" height="200">
                            </li>
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/chust-pichoq.jpg" alt="Chust-pichoq" width="350" height="200">
                            </li>
                            <li class="region__souvenir-item">
                                <img class="region__souvenir-img" src="img/sopol.jpg" alt="Sopol buyumlar" width="350" height="200">
                            </li>
                        </ul>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">Namangan mevalari butun vodiydagidek mazali. Ayniqsa shaftoli ular orasida ajralib turadi! Ushbu noz neʼmatni deyarli har bir bozorda va hatto shaharning kirish qismida ham topish mumkin. Pishgan shaftolilar sersuvligidan yorilgudek, terisini esa shunchaki barmog‘ingiz bilan tozalab olishingiz mumkin. Shuningdek, har qanday kafeda sizga mahalliy oshxonaning xilma-xil turi taklif etiladi. Manti, chuchvara, sho‘rva, kabob va albatta dasturxon qiroli – palov! Palov bu yerda devzira deb nomlangan guruch alohida navi bilan tayyorlanadi. Ushbu nav Farg‘ona vodiysida yetishtiriladi va mazkur taomga aynan keladi. Uning o‘zgacha taʼmi mahalliy palovga alohida xislat zavq bag‘ishlaydi va taomdan yana va yana tanovul qilish ishtiyog‘ini uyg‘otadi. Shaharda vino ishlab chiqariladi va ishoning, mahalliy vino sizni befarq qoldirmasligi aniq. Uni 1939 yildan buyon o‘z texnologiyalari asosida tayyorlab kelishmoqda.
                        </p>
                        <ul class="region__kitchen-list">
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/namangan-osh.jpg" alt="plow" width="350" height="200">
                            </li>
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/moshkichir.jpg" alt="Moshkichir" width="350" height="200">
                            </li>
                            <li class="region__kitchen-item">
                                <img class="region__kitchen-img" src="img/manti.jpg" alt="manti" width="350" height="200">
                            </li>
                        </ul>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Namangan haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-8N0HLMheec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/namangan-bobur-bogi.jpg" alt="Bobur-bogi" width="540" height="300">
                                <p class="region__gallery-img-text">Bobur bog'i</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/namangan-jome-masjid.jpg" alt="Jome masjid" width="540" height="300">
                                <p class="region__gallery-img-text">Namangan jome masjidi
                                </p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/sanat-muzey.jpg" alt="Sa'nat muzeyi" width="540" height="300">
                                <p class="region__gallery-img-text">Sa'nat muzeyi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/afsonalar-bogi.jpg" alt="Afsonalar bogi" width="540" height="300">
                                <p class="region__gallery-img-text">Afsonalar bogi</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Namangan xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96400.09269286704!2d71.64462255!3d40.9704676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2z0J3QsNC80LDQvdCz0LDQvQ!5e0!3m2!1sru!2s!4v1658413174205!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Farg'ona
            case "Farg'ona":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Farg'ona</h2>
                        <p class="region__about-text">Zamonaviy Farg‘ona - iqtisodiyoti va madaniyati rivojlangan yirik sanoat markazi. Bu yerda amaliy sanʼat, sheʼriy adabiyot va taʼlim anʼanalari saqlanib qolgan. Shaharga tashrif buyurganingizda quyidagilarni ko‘rishingiz mumkin:
                        </p>
                        <img class="region__about-img" src="img/fargona-darvoza.jpg" alt="Fargona darvoza">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Markaziy bog‘ va al-Farg‘oniy yodgorligi;
                            </li>
                            <li class="region__attracions-item">✔️ O‘lkashunoslik muzeyi va qo‘g‘irchoq teatri;
                            </li>
                            <li class="region__attracions-item">✔️ "Yangi Chek" va “Nur-Jomiy” masjidlari;
                            </li>
                            <li class="region__attracions-item">✔️ San'at saroyi;
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Farg‘onada ob-havo vodiyniki bilan bir xil. Qish juda yumshoq va manfiy harorat juda kamdan-kam bo‘ladi, ammo keskin sovishi ham mumkin. Bunday paytlarda har doim zaxirada issiq narsalar bo‘lishi kerak. Yaxshiyamki, bu tez-tez sodir bo‘lmaydi va agar shunday bo‘lsa ham, ko‘pi bilan bir-ikki kunga cho‘ziladi.Yozda barqaror issiq bo‘ladi, uni vaqti-vaqti bilan issiq garmsil buzib turishi mumkin.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Farg‘ona vodiysi o‘zining hunarmandchilik ustaxonalari bilan mashhur. Farg‘onadan olib kelinadigan eng ko‘p sovg‘alar – kulolchilik, yog‘och o‘ymakorligi mahsulotlari va, albatta, xon atlas, adras va ipak kabi to‘qimachilik buyumlari hisoblanadi.Agar siz ozgina qimmatbaho vaqtingizni sarflab, Farg‘onadan50 km uzoqlikda bo‘lgan Rishtonga borsangiz, unda siz kulolchilik jannatiga tushasiz! Aynan shu shaharda qo‘rg‘oshin bilan naqsh yugurtirish usuli va yarim loydan yasalgan “chinni” nomi bilan tanilgan idishlar paydo bo‘lgan.
                        </p>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">Farg‘onada noyob palov tayyorlanadi. Butun vodiyda bo‘lgani kabi, bu taomni tayyorlash uchun maxsus guruch navi – devzira ishlatiladi. Bu guruch noodatiy qizil-jigarrangga ega bo‘lib, taʼm jihatdan palov uchun juda mos keladi! Noyob lazzatni kasb etish uchun qoida tariqasida sarimsoq ishlatiladi. U guruch qo‘shmasdan oldin butunligicha solinadi. Vodiyning boshqa joylarida bo‘lgani kabi, Farg‘onada ham ajoyib mevalar o‘sadi. Mahalliy bog‘larning neʼmatlari nafaqat bozorlar va do‘konlarda, balki shaharning kirish qismida yo‘llar bo‘yida va hatto odamlar uylari yonida ham sotiladi. Barchasining narxi juda arzon, chunki Farg‘onada mevalar mo‘l-ko‘l. Bu yerda siz turli xil shirinliklar va boshqa milliy taomlarni, masalan, holva, paxlava, manti, lag‘mon, kabob, sho‘rva va boshqalarni ham tatib ko‘rishingiz mumkin.
                        </p>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Namangan haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/igPGqY8HBkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/far-bog.jpg" alt="Fargona bogi" width="540" height="300">
                                <p class="region__gallery-img-text">Markaziy bog‘ va al-Farg‘oniy yodgorligi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/sanat-saroy.jpg" alt="Sanat saroyi" width="540" height="300">
                                <p class="region__gallery-img-text">Sanat saroyi</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Farg'ona xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48628.9937298896!2d71.79046149999999!3d40.3797748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2z0KTQtdGA0LPQsNC90LA!5e0!3m2!1sru!2s!4v1658418547201!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Samarqand
            case "Samarqand":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Samarqand - Madaniyatlar chorrahasi</h2>
                        <p class="region__about-text">Samarqandni chinakam noyob shahar, deb atash mumkin! Dunyoning eng buyuk shoir va faylasuflari uni - qalb bog‘i, sharq durdonasi, dunyoning ko‘zgusi va hatto yer yuzi deb atashganlarida ham, ular bu go‘zal shaharning barcha go‘zalligi va boyliklarini tasvirlab berolmagan bo‘lardilar.
                        </p>
                        <img class="region__about-img" src="img/samarqand.jpg" alt="Samarqand">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Registon maydoni;
                            </li>
                            <li class="region__attracions-item">✔️ Go'ri Amir maqbarasi;
                            </li>
                            <li class="region__attracions-item">✔️ Shohi Zinda;
                            </li>
                            <li class="region__attracions-item">✔️ Imom al-Buxoriy maqbarasi;
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Samarqand iqlimiga aniq fasllarga bo‘linish xos. Qish odatda yumshoq va harorat 0 ° S dan pastga juda kam hollarda tushadi. To‘satdan sovuq bo‘lishi juda kam uchraydi, va asosan kechalari tushishi mumkin. Bu yerda yoz juda issiq, shuning uchun siz o‘zingiz bilan bosh kiyim va quyoshdan himoya qilish uchun ko‘zoynak olib kelishni unutmang.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Samarqand suvenir do‘konlari yog‘ochdan, matodan va boshqa materiallardan yasalgan hunarmandchilik mahsulotlarining ishqibozlarini xursand qilishi mumkin. Anʼanaga ko‘ra, ustaxonalarning aksariyati eski madrasalarda bo‘lib, barcha hunarmandchilik mahsulotlari mahalliy hunarmandlar tomonidan qo‘lda yasalgan. Ammo Samarqandda odatiy suvenirlardan tashqari, siz mamlakatning boshqa hududlarida topa olmaydigan yana bir nechta xususiyatlarni ko‘rishingiz mumkin. Avvalo, sizga Bibixonim masjidi yonida joylashgan, eski Samarqandning markazida bo‘lgan Siyob bozoriga tashrif buyurishingizni maslahat beramiz. Ushbu bozorda siz juda ko‘p miqdorda quritilgan mevalar, yong‘oqlar va shirinliklarni topishingiz mumkin .Yuqorida sanab o‘tilgan narsalar qatorida Samarqand kulchasi va Samarqand holvasini alohida ajratib ko‘rsatish mumkin. Shuningdek, Samarqand viloyatida “Meros” nomli qog‘oz fabrikasi ham mavjud. Uning ustalari tut po‘stlog‘idan qog‘oz tayyorlash usulini saqlab qolishgan. Ushbu usul X-XI asrda paydo bo‘lib o‘zining bardoshliligi bilan ajralib turgan. Ushbu fabrikada siz shahar rasmi tasvirlangan otkritkalar, yon daftarlar, niqoblar va hatto noodatiy qog‘ozli ko‘ylaklar, qo‘g‘irchoqlar va sumkalar kabi buyumlarni sotib olishingiz mumkin.
                        </p>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">Aksariyat viloyatlarimizda bo‘lgani kabi Samarqandda ham asosiy taom palovdir. Bu turdagi palov, Buxoro palovi singari, pishirish paytida aralashmaydi, bu esa palovga o‘ziga xos parhezli taʼm beradi. Aslida, bu parhezlik shundan iboratki, har kim taomdan qancha sabzi va qancha go‘sht suzishni tanlashi mumkin. Oshdan tashqari, turli xil kaboblar, manti va ayniqsa Samarqand nonlari ham mashhur! Samarqand noni haqida afsonalar mavjud, chunki ularni xohlagancha saqlash mumkin va ular hech qachon mog‘orlamaydi va qotib ham qolmaydi. Afsonalardan birida aytilishicha, Buxoro amirlaridan biri Samarqand nonlarini juda yaxshi ko‘rar va shu sababli nonlarni doimiy ravishda unga olib kelishni buyurar edi. Ammo bir safar buyurtmani kutishdan charchaganda, ularni Buxoroda qanday qilib pishirish mumkinligi to‘g‘risida o‘ylay boshladi. “Ehtimol, Samarqanddan un olib kelish kerakdir”, deb o‘yladi u. Ammo nonlar o‘xshamadi. “U holda mahalliy suvni olib kelish kerak”. Ammo yana muvaffaqiyatsizlik. “Ehtimol, hamma gap loydadir! Samarqand loyini olib kelib, undan tandir yasash kerak!”. Natija o‘zgarishsiz qoldi. “Ehtimol, bu novvoylardadir? Menga samarqandlik novvoy kerak!”. Ammo hattoki samarqandlik novvoy ham bu taʼmni Buxoroda takrorlay olmadi. Shundan so‘ng, amir o‘z urinishlaridan voz kechdi va sevimli taomini Samarqanddan olib kelishni davom ettirdi.
                        </p>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Samarqand haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/f6DRqbhXbWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/registon.jpg" alt="Registon" width="540" height="300">
                                <p class="region__gallery-img-text">Registon</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/gori-amir.jpg" alt="Go'ri-Amir maqbarasi" width="540" height="300">
                                <p class="region__gallery-img-text">Go'ri-Amir maqbarasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/al-buxoriy.jpg" alt="Imom al-Buxoriy maqbarasi" width="540" height="300">
                                <p class="region__gallery-img-text">Imom al-Buxoriy maqbarasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/shohi-zinda.jpg" alt="Shohi Zinda" width="540" height="300">
                                <p class="region__gallery-img-text">Shohi Zinda</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Samarqand xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98316.83297264716!2d66.96788705!3d39.64068835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0!5e0!3m2!1sru!2s!4v1658419784784!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Buxoro
            case "Buxoro":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Buxoro - Islom madaniyati poytaxti</h2>
                        <p class="region__about-text">Muqaddas Buxoro O‘zbekistonning sayyohlik durdonalaridan biridir.  Tarixiy shahar markazi YUNESKOning Butunjahon merosi ro‘yxatiga kiritilgan. Shaharning yoshi  2500 yildan  oshgan.
                        </p>
                        <img class="region__about-img" src="img/buxoro.jpg" alt="Buxoro">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️Ark qalʼasi;
                            </li>
                            <li class="region__attracions-item">✔️ Somoniylar maqbarasi;
                            </li>
                            <li class="region__attracions-item">✔️ Chashmai Ayub maqbarasi;
                            </li>
                            <li class="region__attracions-item">✔️ Labi-Xovuz ansambli va boshqalar.
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Bu yerdagi yozni issiq va qurg‘oq deb taʼriflash mumkin, shuning uchun yilning bu faslida Buxoroga sayohat qilganda o‘zingiz bilan soyabon va quyosh nuridan saqlovchi krem olishni unutmang. Buxoroda qish juda yumshoq, ammo iliq narsalarni ham eʼtibordan chetda qoldirmang.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Buxoro ko‘chalarida ko‘plab turli xil esdalik do‘konlarini va ustaxonalarini topishingiz mumkin. Baʼzida barcha suvenirlar bir xil bo‘lib tuyuladi, ammo bu shunday emas! Har bir sotuvchida sizni ajablantiradigan narsa bo‘ladi! Buxoro – O‘zbekistonning to‘quv poytaxti! Agar siz zamonaviy va didli, hamda milliy kiyim-kechaklar olishni istasangiz, unda, albatta, Buxoroga tashrif buyurishingiz lozim! Do‘konlarning aksariyati Labi-Hovuz oldida va mashhur Poi Kalon ansambli yonidagi savdo toqlarda joylashgan. Tayyor kiyimlar bilan bir qatorda siz iqat matosini o‘zini ham xarid qilishingiz mumkin. Bunday matoni Armani savdo uyi o‘z kolleksiyasida ham ishlatgan. U arzon emas albatta, lekin o‘z narxiga arziydi. Buxoro gilamlari bilan ham mashhur. Gilamlarning sifati Hindiston, Pokiston va Eronnikidan kam emas va baʼzan ulardan ham yaxshiroq! Ekzotika shinavandalari uchun Buxoro maxsus mahorat bilan yasaladigan cholg‘u asboblari yoki qo‘lda yasalgan pichoqlarni taklif qilishi mumkin.
                        </p>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">O‘zbekistondagi barcha shaharlarining asosiy taomlaridan biri bu palov. Agar siz mamlakatimizning barcha hududlarini aylanib chiqsangiz, bu taomning xilma-xilligi sizni hayratda qoldiradi. Har bir shaharda odamlar sizni mamlakatdagi eng yaxshi palov shu yerda ekanligiga ishontirishadi. Faqatgina hammasini tatib ko‘rgandan so‘ng, sizga qaysi biri yoqishini anglay olasiz. Buxoro oshi "Oshi sofi" deb ham ataladi, pishirish usuli tufayli parhez taom hisoblanadi. U o‘ziga xos tarzda tayyorlaniladi, undagi masalliqlar Andijon yoki Toshkentdan farqli o‘laroq bir-biriga aralashtirilmaydi. Yana bir xususiyati shundaki, u faqat mis qozonda pishiriladi. Buxoro taomlariga halisa yoki qayish kabi taomlar kiradi. O‘zbek oshxonasi haqida ko‘proq maʼlumotni ushbu havolada o‘qishingiz mumkin.
                        </p>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Buxoro haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_CH06TjqAxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/ark.jpg" alt="Ark" width="540" height="300">
                                <p class="region__gallery-img-text">Ark</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/somoniylar.jpg" alt="Somoniylar maqbarasi" width="540" height="300">
                                <p class="region__gallery-img-text">Somoniylar maqbarasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/chor-minor.jpg" alt="Chor-Minor" width="540" height="300">
                                <p class="region__gallery-img-text">Chor-Minor</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/poyi-kalon.jpg" alt="Poyi Kalon" width="540" height="300">
                                <p class="region__gallery-img-text">Poyi Kalon</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Buxoro xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49061.003945203855!2d64.42279810000001!3d39.777536299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCw!5e0!3m2!1sru!2s!4v1658426492674!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Xiva
            case "Xiva":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Xiva - Turk dunyosining poytaxti</h2>
                        <p class="region__about-text">Xiva - qadimiy devorlar, minoralar va loydan qurilgan betakror binolar shahri.Islom hamkorlik tashkilotining (IHT) Bokuda boʻlib oʻtgan XI sessiyasi doirasida Xiva 2024-yilda islom olamining turistik poytaxti deb eʼlon qilindi!Xivaning yoshi 2500 yildan oshgan. Agar siz tarixga sho‘ng‘ishni va qadimiy Sharqning haqiqiy go‘zalligini ko‘rishni istasangiz, Xivaga tashrif buyuring.
                        </p>
                        <img class="region__about-img" src="img/xiva.jpg" alt="Xiva">
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Asosiy qalʼa - Ichan-Qalʼa, Kunya-Ark qalʼasi, Dishan-Qalʼa;
                            </li>
                            <li class="region__attracions-item">✔️Xiva hukmdorlarining saroylari va turar joylari;
                            </li>
                            <li class="region__attracions-item">✔️ Qadimiy karvonsaroylar va hammomlar;
                            </li>
                            <li class="region__attracions-item">✔️ Davlat qo‘g‘irchoq teatri va Avesto muzeyi.
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Xivadagi iqlim quruq va cho‘l ob-havosiga o‘xshash. Yoz issiq, lekin shamolli, qishda esa harorat ko‘pincha 0 ° S dan pastga tushadi, shuning uchun issiq kiyimlaringizni unutmang! Ular sizga kerak bo‘lib qolishi mumkin.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">O‘zbekistonning boshqa shaharlarida kabi Xivada ham turli xil suvenir, sovg‘alarni sotib olish mumkin. Ular orasida faqat Xorazm viloyatida sotib olinishi mumkin bo‘lgan juda qiziq narsalar bor. Birinchisi – qo‘lda yasalgan qo‘g‘irchoqlar. Xiva hududida qo‘g‘irchoq teatri mavjud bo‘lib uning yoshi 2000 yilga yaqin! Shu sababli, sahnada namoyish etish uchun qo‘g‘irchoqlar tayyorlash asrlarga borib taqaladi, ammo hozirgacha qo‘g‘irchoq spektakllarga bo‘lgan muhabbat yo‘qolmagan. Xorazmliklarning asosiy xislatlaridan yana biri qadimgi davrlardan beri tayyorlanadigan Sʼho‘g‘irma bosh kiyimlaridir. Ko‘rinishidan u juda katta va og‘irdek tuyuladi, lekin aslida u juda yengil va qulay. Cho‘g‘irma boshda maxsus mikroiqlim yaratib, yozda qizib ketishdan, qishda esa sovuqdan saqlaydi. Qadimgi davrlarda bunday cho‘g‘irmalar juda qimmat bo‘lgan. Ularning narxi tuya narxiga tenglashtirilgan, shuning uchun uni faqat badavlat odamlar sotib olishlari mumkin edi. Hozirda uning narxi ancha past va g‘ayrioddiy bosh kiyimlarni sevuvchilarga yoqishi aniq! Shuningdek, Xiva hududida turli xil yog‘och hunarmandchilik buyumlarini sotib olishingiz mumkin. Mahalliy hunarmandlar mayda shaxmat donalaridan tortib to hassa va hatto o‘yma eshiklargacha hamma narsani yaratadilar! Har qanday nozik didli bo‘lsangiz ham, mahalliy hunarmandlar sizni mamnun qila olishadi.
                        </p>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">Retseptlar mintaqadan mintaqaga qarab o‘zgarib turadi. Agar siz turli shaharlarda bitta taomni tatib ko‘rsangiz, uning taʼmi qanchalar farq qilishidan hayratlanasiz! Tabiiy sharoiti juda qiyin bo‘lganligi sababli Xorazm oshxonasining taomlari O‘zbekistondagi o‘ziga xos  taomlardan hisoblanadi. Ko‘pincha bitta noodatiy taomni uchratishingiz mumkin ... U “qaynatilgan tuxum” deb tarjima qilingan “tuxum-barak” deb nomlanadi. Siz g‘ayrioddiyligi nimada deb so‘rashingiz mumkin? Tayyor taom shakli qaynatilgan chuchvaraga o‘xshab ketadi, ammo ajoyibligi uning tayyorlanish usulidadir. Kesilgan xamir xom tuxum bilan to‘ldiriladi va oqib ketishga ulgurmasdan qaynab turgan suvga juda tez tashlanadi. Aytishlaricha bu taom xonlar uchun tayyorlagan. Bundan tashqari mahalliy xalqning eng sevimli taomi bu – baliqdir. Baliqlar Xivada beqiyos darajada tayyorlanadi va hatto dengiz mahsulotlarini yoqtirmaydigan odam ham mahalliy baliqni pishirishning o‘ziga xos uslubiga befarq bo‘la olmaydi, deyilsa mubolag‘a bo‘lmaydi. Shuningdek, shirin taomlardan yana biri bu Shivit Osh yoki Yashil lag‘mondir. Bu taomdagi lag‘monga yashil rang berish uchun maxsus texnikadan foydalangan holda shivit ko‘kati qo‘shib tayyorlanadi. U go‘sht va sabzavotli qayla hamda qatiq bilan tortiladi. O‘zbek oshxonasi haqida ko‘proq maʼlumotni ushbu havoladan o‘qishingiz mumkin.прочитать по этой ссылке.
                        </p>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Xiva haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/41orvBi8qVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/ichan-qala.jpg" alt="Ichan-qala" width="540" height="300">
                                <p class="region__gallery-img-text">Ichan-qala</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/muhammadamin.jpg" alt="Muhammadamin madrasasi" width="540" height="300">
                                <p class="region__gallery-img-text">Muhammadamin madrasasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/yoshlar-koli.jpg" alt="Yoshlar ko'li" width="540" height="300">
                                <p class="region__gallery-img-text">Yoshlar ko'li</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/avesto.jpg" alt="Avesto monumenti" width="540" height="300">
                                <p class="region__gallery-img-text">Avesto monumenti</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Buxoro xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47892.90630123388!2d60.350003199999996!3d41.38914655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfa413ffe48cf9%3A0xcd75f47f7a6dc0cd!2z0KXQuNCy0LA!5e0!3m2!1sru!2s!4v1658427309678!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
            // Qo'qon
            case "Qo'qon":
                elRegion.innerHTML = `
                <div class="region">
                    <!-- About -->
                    <section class="region__about">
                        <h2 class="region__about-title">Qo'qon shaxri</h2>
                        <p class="region__about-text">Qo‘qon Buyuk Ipak yo‘lidagi eng qadimiy shahar. Shahar hashamatli yodgorliklarga va ulug‘vor madrasalarga boy va bu ajablanarli emas, chunki Qo‘qon ilm-fan rivojlanishining   markazi edi. Quyidagi diqqatga sazovor joylarni ko‘rishni unutmang:
                        </p>
                        <img class="region__about-img" src="img/qoqon.jpg" alt="Qo'qon>
                    </section>
                    
                    <!-- Attractions -->
                    <section class="region__attractions">
                        <h2 class="region__attracions-title">Eng yaxshi diqqatga sazovor joylar</h2>
                        <ul class="region__attracions-list">
                            <li class="region__attracions-item">✔️ Xudoyorxon saroyi,
                            </li>
                            <li class="region__attracions-item">✔️ Jomiy masjidi,
                            </li>
                            <li class="region__attracions-item">✔️ Modarixon maqbarasi,
                            </li>
                            <li class="region__attracions-item">✔️ Norbutabiy madrasasi;
                            </li>
                            <li class="region__attracions-item">✔️ Qo‘qon xonlarining maqbarasi Dahma-i Shahan.
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Climate -->
                    <section class="region__climate">
                        <h2 class="region__climate-title">Iqlim 🌡</h2>
                        <p class="region__climate-text">Qo‘qonning iqlimi barqaror issiq yoz va xuddi shunday barqaror sovuq qish bilan xarakterlanadi. Bu yerda ko‘p yog‘ingarchilik bo‘lmaydi va ularning aksariyati kuzda va bahorda yo‘gadi. Yozda kelganingizda, bosh kiyim va soyabonlarni unutmang, shuningdek ko‘p miqdorda suyuqlik iching.
                        </p>
                    </section>
    
                    <!-- Souvenir -->
                    <section class="region__souvenir">
                        <h2 class="region__souvenir-title">Sovg‘alar va suvenirlar 🛍
                        </h2>
                        <p class="region__souvenir-text">Qo‘qonga sayohat qilganingizda, kattaroq chamadonni oling, chunki u O‘zbekiston hunarmandchiligining poytaxti! Bu yerda siz deyarli hamma narsani topishingiz mumkin! O‘ziga xos loydan tayyorlangan buyumlarni sotib olishni xohlaysizmi? Marhamat! Kulolchilik ustaxonalari sonining hisobi yo‘q. Yoki siz noyob so‘zana sotib olishni istaysizmi? Muammosiz! Shaharda qo‘shni shaharlarning hunarmandlari yasagan buyumlarni, masalan, Chust pichoqlarini yoki Farg‘onadagi mevalarni ham topishingiz mumkin.
                        </p>
                    </section>
    
                    <!-- Kitchen -->
                    <section class="region__kitchen">
                        <h2 class="region__kitchen-title">Oshxona 🍽</h2>
                        <p class="region__kitchen-text">Qo‘qonning oshxonasi butun O‘zbekistondagidek juda mazali va sergo‘sht. Qo‘qon palovi faqat devzira deb nomlangan guruchning maxsus navidan tayyorlanadi. Bu nav butun vodiy bo‘ylab ishlatiladi. Mazkur turdagi palov faqat sarimsoq va achchiq qalampir bilan tayyorlanadi va hech qanday holatda unga shirin masalliqlar qo‘shilmaydi. Palovning barcha turlaridan Qo‘qonda tayyorlanadigani hazm qilish uchun qiyin, shuning uchun o‘zingiz bilan fermentlarni olib borishni unutmang! Qo‘qon oshxonasining yana bir o‘ziga xos xususiyati bu patirlardir. Qo‘qonliklarning aytishicha, vodiyda qilingan barcha nonlarni Qo‘qonlik erkaklar tayyorlashadi. Qo‘qon xolvasini ham tatib ko‘rishni maslahat beramiz! U O‘zbekiston hududida tayyorlanadigan eng nozik va eng mazali holva. O‘zbek taomlari haqida ko‘proq maʼlumotni ushbu havola orqali o‘qishingiz mumkin.
                        </p>
                    </section>
    
                     <!-- Video -->
                     <section class="region__video">
                        <h2 class="region__video-title">Qo'qon haqida video</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FaHVunR7YTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
    
                    <!-- gallery -->
                    <section class="region__gallery">
                        <h2 class="region__gallery-title">Foto gallereya</h2>
                        <p class="region__gallery-text">Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi! Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan tanishtiramiz.
                        </p>
                        <ul class="region__gallery-list">
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/orda.jpg" alt="Xudoyorxon o'rdasi" width="540" height="300">
                                <p class="region__gallery-img-text">Xudoyorxon o'rdasi</p>
                            </li>
                            <li class="region__gallery-item">
                                <img class="region__gallery-img" src="img/dahmai-shohon.jpg" alt="Dahmai-Shohon" width="540" height="300">
                                <p class="region__gallery-img-text">Dahmai-Shohon</p>
                            </li>
                        </ul>
                    </section>
    
                    <!-- Map -->
                    <section class="region__map">
                        <h2 class="region__map-title">Qo'qon xaritasi</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48517.39143182736!2d70.9311247!3d40.534144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baeeeb2e1c3e7f%3A0x816d723cc5842908!2z0JrQvtC60LDQvdC0!5e0!3m2!1sru!2s!4v1658428064227!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                `
                break;
        default:
            elRegion.innerHTML = `
            <div class="default">Hozirda bazada ushbu shaxar haqida ma'lumot mavjud emas.</div>
            `
            break;
    }
});