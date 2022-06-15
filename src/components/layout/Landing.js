import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import Navbar from './Navbar'

const Landing = () => {

  return (
    <div className='container-fluid landing'>
      <Header />
      {/* <Navbar /> */}
      <div className='home-image row'>
        <img alt='SETIMAGE' className='img-fluid' src='/images/home-image-1.png' />
      </div>
      <div className='row bg-black'>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-12 text-center'>
              <button className='btn btn-danger mx-1' style={{ width: '90px' }}>Promosi</button>
              <button className='btn bg-success text-white mx-1' style={{ width: '90px' }}>Daftar</button>
              <button className='btn btn-primary mx-1' style={{ width: '90px' }}>Masuk</button>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 pt-5'>
              <div className='text-center'>
                <div className='h1 text-success'>BANDAR SLOT GACOR MUDAH JACKPOT PRAGMATIC88</div>
                <div className='text-white pb-4'>
                  Tidak bisa dibantah lagi jika alasan utama orang bermain <span className='text-success'>slot online</span> adalah karena ingin mendapatkan jackpot besar dengan bet slot kecil. Permainan semacam ini bisa Anda temukan cuma di game slot gacor yang ada di Pragmatic88. Segera daftarkan akun Anda dan dapatkan berbagai promo judi online terbaik cuma di Pragmatic88!
                </div>
                {/* <div>
                  <button className='btn text-success px-4 border-success mx-1'>MASUK</button>
                  <button className='btn text-white px-4 bg-success mx-1'>DAFTAR</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 bg-success text-center'>
              <div className='p-3 h2 text-white'>Official Pragmatic88 Group</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-slider-1.png' className='img-fluid' />
                </div>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-slider-2.png' className='img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-slider-3.png' className='img-fluid' />
                </div>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-slider-4.png' className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='h1 text-success'>
                YANG HARUS DIKETAHUI TENTANG PRAGMATIC88
              </div>
            </div>
            <div className='col-md-6'>
              <img alt='SETIMAGE' src='/images/home-form-1.png' className='img-fluid' />
            </div>
            <div className='col-md-6 text-content'>
              <div className='my-2 text-justify text-white'>
                Di balik kemudahan bermain judi yang bisa Anda dapatkan, nyatanya masih ada kendala yang bisa Anda temukan jika memutuskan untuk bermain judi online. Salah satu kendala ini adalah memilih situs judi online terbaik. Ini dikarenakan karena meledaknya judi online membuat banyak situs-situs judi online baru bermunculan. Sayangnya, situs-situs ini justru melakukan kecurangan yang membuat pemain merugi.
              </div>
              <div className='my-2 text-justify text-white'>
                Untuk mengantisipasi kendala seperti ini, Anda bisa mencari terlebih dahulu di internet tentang situs judi apa yang direkomendasikan. Pilihlah website judi online yang memang sudah memiliki rekam jejak dan review bagus di internet, seperti PRAGMATIC88.
              </div>
              <div className='my-2 text-justify text-white'>
                Karena menjadi partner resmi judi online di Indonesia, PRAGMATIC88 bebas dari kecurangan sehingga Anda bisa bermain dengan tenang dan nyaman. Menariknya lagi, PRAGMATIC88 dapat diakses lewat banyak perangkat, mulai dari komputer hingga smartphone dengan sistem operasi Android atau pun iOs.
              </div>
              <div className='my-2 text-justify text-white'>
                <span className='text-success'>Pragmatic88</span> sendiri merupakan bagian dari Pragmatic Group Indonesia. Bersama dengan <span className='text-success'>Pragmatic123,King88, Pragmatic8et</span> dan <span className='text-success'>PragmaticID</span>, Pragmatic88 menjalin kerja sama dengan provider judi slot online terbaik dunia saat ini Pragmatic Play. Dengan menjadi bagian dari Pragmatic Group Indonesia, Anda dapat mencoba semua game slot online dari Pragmatic Play, baik game slot online terbaru maupun game slot online lawas mereka di situs kami.
              </div>
            </div>
          </div>
        </div>

        <div className='container mt-4 mb-5'>
          <div className='row mt-2'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-1.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Poker</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-2.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Bola</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-3.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Casino</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-4.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Arcade</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-5.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Poker</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-6.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Bola</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-7.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Casino</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-8.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Arcade</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-9.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Casino</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <div className='p-2'>
                      <img className='img-fluid w-100' alt='SETIMAGE' src='/images/home-card-10.png' />
                    </div>
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Arcade</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row my-3'>
            <div className='col-md-9'>
              <div className='h1 text-success'>
                SLOT PRAGMATIC PALING GACOR HARI INI
              </div>
            </div>
            <div className='col-md-3 text-right'>
              <button className='btn bg-success text-white font-weight-bold px-3 py-2'>LIHAT SEMUA</button>
            </div>
            <div className='col-md-10 text-white text-content'>
              Pragmatic Play sebagai salah satu provider judi slot online terbaik dunia tentunya juga memiliki game-game judi slot online dengan nilai RTP yang besar yang bisa dikatakan sebagai game slot gacor. Apa saja game judi slot <span className='text-success'>Pragmatic Play</span> yang memiliki RTP terbesar hari ini? Berikut beberapa di antaranya:
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-carousel-1.png' width='100%' />
                </div>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-carousel-2.png' width='100%' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-carousel-3.png' width='100%' />
                </div>
                <div className='col-6 mt-3'>
                  <img alt='SETIMAGE' src='/images/home-carousel-4.png' width='100%' />
                </div>
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>Gold Train</div>
              <div className='text-content'>
                Sebenarnya nilai jackpot yang bisa diraih dari game slot online gacor ini relatif, yaitu hanya sebesar 500x nilai modal. Namun, nilai RTP dari game slot online satu ini termasuk tinggi, yakni sebesar 97,16%
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>The Catfather</div>
              <div className='text-content'>
                Pecinta film The Godfather pasti menyukai game slot gacor online satu ini. Hal ini dikarenakan simbol-simbol yang digunakan dalam The Catfather berhubungan dengan film tersebut. Nilai RTP sebesar 98,10% semakin membuat banyak orang tertarik untuk mencoba game slot online satu ini.
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>888 Gold</div>
              <div className='text-content'>
                Nilai RTP sebesar 97,52% sudah memberikan gambaran jika game slot online gacor satu ini pastinya akan sangat menguntungkan Anda. Didukung oleh grafik yang menawan, 888 Gold akan membawa Anda untuk bermimpi tidur di atas tumpukan uang!
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>888 Dragons</div>
              <div className='text-content'>
                Tiga naga dengan warna berbeda menjadi simbol kemenangan dari game slot gacor online satu ini. Meskipun termasuk kategori game slot online dengan gameplay standar, nilai RTP yang mencapai 96,84% membuat banyak orang tertarik untuk mencoba permainan slot online satu ini.
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 h1 text-success'>
              CARA MAIN JUDI ONLINE MUDAH MENANG
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12'>
              <img alt='SETIMAGE' className='img-fluid' src='/images/home-image-2.png' />
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Judi slot online seringkali disebut sebagai permainan <span className='text-success'>judi online</span> yang paling gampang dimainkan. Ini tidak terlepas karena Anda hanya butuh memencet satu tombol untuk memutar mesin slot. Meski begitu, untuk memenangkan sebuah permainan judi slot online tidak semudah memutar mesin slotnya. Ada beberapa langkah yang bisa Anda lakukan agar kemenangan dalam game online judi ini bisa didapatkan dengan mudah. Berikut ini beberapa langkah yang bisa Anda lakukan:
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>
                Jangan Terburu-Buru
              </div>
              <div className='text-content'>
                Langkah pertama yang harus dilakukan adalah jangan terburu-buru dalam bermain. Pejudi pemula biasanya bermain terburu-buru, apalagi ketika mereka sudah mulai memenangkan permainan. Bermainlah dengan santai. Konsentrasi dan konsisten adalah kunci utama untuk memenangkan setiap permainan judi.
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>
                Lakukan Manajemen Modal
              </div>
              <div className='text-content'>
                <div>
                  Manajemen modal merupakan hal penting lain yang mudah sekali dilupakan ketika bermain judi. Seorang penjudi ketika sudah bermain biasanya tidak akan fokus lagi pada modal yang mereka miliki. Yang ada di dalam pikiran mereka adalah bagaimana caranya agar bisa meraih kemenangan saat bermain.
                </div>
                <div className='mt-3'>
                  Untuk itu, sebelum bermain dalam sebuah game judi, alangkah baiknya jika Anda sudah menetapkan terlebih dahulu batasan modal yang akan dimainkan. Hal ini penting untuk mengantisipasi jika Anda mengalami kekalahan nantinya.
                </div>
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 text-subtitle'>
                Pahami Jenis Permainan
              </div>
              <div className='text-content'>
                Hal ini merupakan hal paling penting dan biasanya justru tidak diingat oleh seseorang sebelum mulai memainkan judi online. Jika Anda tidak memahami permainan judi yang ingin dimainkan, hal ini sama saja seperti membeli kucing dalam karung. Anda hanya akan bermain judi tanpa tahu apa yang akan dihadapi.
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 h1 text-success'>
              MENGENAL GAME JUDI LIVE CASINO ONLINE
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12'>
              <img alt='SETIMAGE' className='img-fluid' src='/images/home-image-3.png' />
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Aktivitas judi tentu tidak pernah lepas dari casino. Nama itu sendiri berasal dari bahasa Italia yaitu “Root casa” yang berarti rumah. Istilah casino juga bisa diartikan sebagai villa pedesaan kecil, rumah di musim panas, atau juga sering disebut klub sosial.
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Seiring berjalannya waktu, teknologi mempermudah setiap orang bermain casino online yang hanya membutuhkan gawai untuk melakukannya. Untuk mulai bermain, Anda bisa memilih situs casino online terbaik, yaitu Pragmatic88.
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Sebagai informasi, Pragmatic88 sudah bekerjasama dengan provider judi casino online terpercaya seperti ION Casino, Allbet Casino, Sexy Baccarat, Pretty Gaming Casino, Pragmatic Play Casino, dan SBOBet casino. Deretan provider ini membawa game judi live casino online populer untuk bisa dimainkan di Pragmatic88. Game <span className='text-success'>casino online</span> yang mereka tawarkan seperti casino roulette online, baccarat online, dragon tiger online, sicbo online, hingga sabung ayam online.
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Aneka permainan judi online tersebut serta yang lainnya menawarkan pengalaman main game dapat uang asli bagi semua orang.
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 h1 text-success'>
              DAFTAR SITUS JUDI SLOT ONLINE TERBAIK DAN TERPERCAYA DI PRAGMATIC88
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Aktivitas judi tentu tidak pernah lepas dari casino. Nama itu sendiri berasal dari bahasa Italia yaitu “Root casa” yang berarti rumah. Istilah casino juga bisa diartikan sebagai villa pedesaan kecil, rumah di musim panas, atau juga sering disebut klub sosial.
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-1.png' />
                  </button>
                </div>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-2.png' />
                  </button>
                </div>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-3.png' />
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-4.png' />
                  </button>
                </div>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-5.png' />
                  </button>
                </div>
                <div className='col-4 mt-3'>
                  <button className='btn p-2 border-dark w-100'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-link-6.png' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 h1 text-success'>
              PILIHAN GAME JUDI ONLINE LAIN DI PRAGMATIC88
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white text-content'>
              Tidak cuma judi slot online yang bisa Anda mainkan di Pragmatic88. Sebagai official partner Pragmatic Play terbaik dan provider judi online lainnya, ada beragam permainan judi online lain yang bisa Anda mainkan di Pragmatic88. Beberapa di antaranya adalah:
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-carousel-5.png' />
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Poker</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-carousel-6.png' />
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Bola</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-carousel-7.png' />
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Casino</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='border rounded-xl border-success'>
                    <img className='img-fluid' alt='SETIMAGE' src='/images/home-carousel-8.png' />
                    <div className='text-center my-2 text-white'>RTP LIVE Judi Arcade</div>
                    <div className='text-center my-2'>
                      <button className='btn btn-light py-1 px-5'>PLAY</button>
                    </div>
                    <div className='text-center my-2'>
                      <img alt='SETIMAGE' src='/images/logo.png' width='160px' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5'>
          <div className='row my-3'>
            <div className='col-12'>
              <div className='h1 text-success'>
                INFORMASI SEPUTAR BANDAR SLOT PRAGMATIC TERLENGKAP, PRAGMATIC88
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 h2'>Apa itu slot online?</div>
              <div className='text-content'>
                Slot online merupakan salah satu jenis permainan yang dimainkan dengan cara memutar mesin slot dan dimenangkan ketika pemain mendapatkan kombinasi yang tepat dari simbol.
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 h2'>Apa keunggulan judi slot online?</div>
              <div className='text-content'>
                Judi slot online memiliki keunggulan mudah untuk dimainkan. Anda hanya perlu memencet tombol untuk memutar mesin slot dan menunggu kombinasi yang tepat untuk muncul.
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 h2'>Provider apa saja yang tersedia di Pragmatic88?</div>
              <div className='text-content'>
                Jika Anda bermain di Pragmatic88, Anda bisa memiliih untuk bermain judi slot online yang dibuat oleh 18 provider berbeda.
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12 text-white'>
              <div className='pb-2 h2'>Apakah nama Pragmatic88 berhubungan dengan Pragmatic Play?</div>
              <div className='text-content'>
                Benar, Pragmatic88 merupakan agen resmi Pragmatic Play di Indonesia. Bersama dengan Pragmatic123, PragmaticID, dan King88, Pragmatic88 merupakan bagian dari Pragmatic Group Indonesia. Hal ini membuat Anda bisa memainkan seluruh permainan slot online yang dibuat oleh Pragmatic Play, termasuk game terbaru yang akan selalu diperbarui.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Landing