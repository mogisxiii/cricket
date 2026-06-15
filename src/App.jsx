import logo from "./assets/logo-cricket.png";
import mascot from "./assets/mascot-cricket.png";
import mascot02 from "./assets/mascot-cricket-02.png";

import product01 from "./assets/product-01.jpg";
import product02 from "./assets/product-02.jpg";
import product03 from "./assets/product-03.jpg";
import product04 from "./assets/product-04.jpg";
import product05 from "./assets/product-05.jpg";
import product06 from "./assets/product-06.jpg";

import productDemo from "./assets/product-demo.png";

import theme01 from "./assets/theme-01.jpg";
import theme02 from "./assets/theme-02.jpg";

import "./App.css";

const useCases = [
  {
    title: "Xe cá nhân",
    text: "Cất giấy tờ xe, tiền mặt, chìa khóa và vật dụng nhỏ ngay trong khoang ghế.",
    image: product01,
  },
  {
    title: "SUV gia đình",
    text: "Phù hợp xe gia đình, xe đi xa, cần nơi lưu trữ kín đáo nhưng dễ thao tác.",
    image: product02,
  },
  {
    title: "Xe dịch vụ",
    text: "Hỗ trợ tài xế bảo quản tiền mặt, giấy tờ và đồ cá nhân trong quá trình di chuyển.",
    image: product03,
  },
  {
    title: "Xe du lịch",
    text: "Giữ hộ chiếu, tiền mặt, vật dụng quan trọng khi đi công tác hoặc du lịch.",
    image: product04,
  },
  {
    title: "Xe nhiều ghế",
    text: "Dễ lắp trên tựa đầu ghế, phù hợp nhiều dòng xe và nhiều bối cảnh sử dụng.",
    image: product05,
  },
];

const trustItems = [
  ["Sản xuất trực tiếp", "Chủ động kiểm soát chất lượng"],
  ["Dễ lắp đặt", "Tối ưu cho tựa đầu ghế xe"],
  ["Bảo hành rõ ràng", "Hỗ trợ nhanh khi cần"],
  ["Mua lẻ vẫn hỗ trợ", "Phù hợp cá nhân và đội xe"],
];

const pricePlans = [
  {
    name: "Cricket Basic",
    desc: "Phù hợp xe cá nhân / gia đình",
    price: "590.000đ",
    image: product01,
    features: [
      "Lắp trên tựa đầu ghế",
      "Ngụy trang tự nhiên",
      "Cất giấy tờ, tiền mặt",
      "Bảo hành 12 tháng",
    ],
    cta: "Đặt mua ngay",
  },
  {
    name: "Cricket Car",
    desc: "Phù hợp SUV / xe dịch vụ / đi công tác",
    price: "690.000đ",
    image: product03,
    features: [
      "Tối ưu cho khoang xe",
      "Dễ thao tác khi cần",
      "Không chiếm diện tích",
      "Bảo hành 12 tháng",
    ],
    cta: "Đặt mua ngay",
    highlight: true,
  },
  {
    name: "Cricket Business",
    desc: "Phù hợp mua số lượng/ đội xe",
    price: "Liên hệ",
    image: product05,
    features: [
      "Chiết khấu hấp dẫn",
      "Hỗ trợ số lượng lớn",
      "Bảo hành theo hợp đồng",
      "Giao hàng tận nơi",
    ],
    cta: "Nhận báo giá",
  },
];

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#b87333]/30 bg-[#050403]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-6">
        <a href="#product" className="flex items-center">
          <img
            src={logo}
            alt="Cricket"
            className="h-11 w-auto rounded-md bg-white p-1"
          />
        </a>

        <nav className="hidden items-center gap-9 text-[13px] font-extrabold uppercase tracking-[0.02em] text-white/85 lg:flex">
          <a href="#product" className="transition hover:text-[#e3a44e]">
            Sản phẩm
          </a>
          <a href="#use" className="transition hover:text-[#e3a44e]">
            Sử dụng
          </a>
          <a href="#trust" className="transition hover:text-[#e3a44e]">
            Uy tín
          </a>
          <a href="#price" className="transition hover:text-[#e3a44e]">
            Bảng giá
          </a>
          <a href="#contact" className="transition hover:text-[#e3a44e]">
            Liên hệ
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-r from-[#d89a45] to-[#a94f22] px-6 py-3 text-[13px] font-extrabold uppercase text-white shadow-xl shadow-[#a94f22]/30"
        >
          Đặt mua ngay
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#080503] pt-[76px] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#080503_0%,#080503_44%,rgba(8,5,3,.78)_65%,rgba(8,5,3,.32)_100%)]" />

      <img
        src={product06}
        alt="Nội thất xe hơi Cricket"
        className="absolute inset-y-0 right-0 h-full w-[62%] object-cover opacity-45"
      />

      <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-[#080503] via-[#080503]/50 to-[#080503]/10" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1320px] items-center gap-16 px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative max-w-[540px] lg:pl-4">



          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.22em] text-[#d89a45]">
             Gối tựa đầu ô tô có két bảo mật
          </p>

          <h1 className="hero-title">
  <span className="hero-title-white">CRICKET</span>

  <span className="hero-title-gold-line">
    <span className="hero-title-gold">KÉT AN TOÀN</span>

    <span className="hero-title-guard">
      <span className="hero-title-guard-shadow" />
      <img src={mascot} alt="Mascot Cricket" />
    </span>
  </span>

  <span className="hero-title-sub">Vật dụng xe hơi</span>
</h1>

  
          <p className="mt-7 max-w-[510px] text-[18px] font-medium leading-[1.72] text-[#f4e7d8]">
            Nơi cất giữ kín đáo tiền mặt, giấy tờ, chìa khóa, trang sức và các vật dụng cá nhân quan trọng ngay trên xe của bạn.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              ["Ngụy trang", "Gối tựa đầu"],
              ["An toàn", "Khóa bảo vệ"],
              ["Dễ lắp", "Hợp nhiều xe"],
              ["Bảo hành", "Hỗ trợ nhanh"],
            ].map(([title, sub]) => (
              <div
  key={title}
  className="border-l border-[#d89a45]/35 pl-4 min-w-0"
>
  <h3 className="text-[15px] font-bold text-white whitespace-nowrap">
    {title}
  </h3>

  <p className="mt-2 text-[13px] leading-5 text-[#cdb8a4]">
    {sub}
  </p>
</div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-[#d89a45] to-[#a94f22] px-8 py-4 text-[14px] font-extrabold uppercase text-white shadow-xl shadow-[#a94f22]/30"
            >
              Đặt mua ngay
            </a>

            <a
              href="#use"
              className="rounded-xl border border-[#d89a45]/70 bg-black/30 px-8 py-4 text-[14px] font-extrabold uppercase text-white"
            >
              ▶ Xem tình huống sử dụng
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-[32px] top-[84px] w-[74%] overflow-hidden rounded-[26px] border-[8px] border-[#120904] bg-[#120904] shadow-[0_36px_90px_rgba(0,0,0,.65)]">
            <img
              src={product03}
              alt="Két bí mật gắn tựa đầu ghế xe Cricket"
              className="h-[390px] w-full rounded-[18px] object-cover"
            />
          </div>

          <div className="absolute bottom-[118px] left-[68px] flex items-center gap-4 rounded-2xl border border-white/20 bg-black/65 px-6 py-4 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-lg">
              ▶
            </div>
            <div>
              <p className="text-[13px] font-black uppercase">
                Video demo thực tế
              </p>
              <p className="text-[24px] font-black leading-none">00:30</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use" className="bg-[#f7efe5] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.22em] text-[#a94f22]">
          Dành cho nhiều dòng xe
        </p>

        <h2 className="mx-auto mt-3 max-w-[920px] text-center font-extrabold uppercase tracking-[-0.045em] leading-[1.06] text-[clamp(28px,7vw,48px)]">
  <span className="block sm:inline">Một giải pháp</span>
  <span className="mx-2 hidden sm:inline">•</span>
  <span className="block sm:inline">Nhiều vấn đề</span>
</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#d8c2aa] bg-white shadow-[0_18px_45px_rgba(80,45,20,.10)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[170px] w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-[15px] font-extrabold uppercase tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-6 text-[#5c4638]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="bg-[#050403] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#d89a45]">
            Trách nhiệm & uy tín
          </p>

          <h2 className="mt-4 text-[40px] font-extrabold uppercase leading-[1.12] tracking-[-0.045em] md:text-[48px]">
            Cricket - giải pháp bảo mật tài sản trên xe
          </h2>

          <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#e7d4bf]">
            Sản phẩm được phát triển theo nhu cầu thực tế của người dùng xe hơi:
            cần một vị trí cất giữ kín đáo, dễ thao tác, không chiếm diện tích
            và phù hợp nhiều bối cảnh di chuyển.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {trustItems.map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d89a45]/25 bg-white/[0.04] p-5"
              >
                <h3 className="text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#e3a44e]">
  {title}
</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#d8c4ac]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5">
            {[
              ["Demo lắp trên xe", productDemo],
              ["Nội thất xe phù hợp", product02],
              ["Sử dụng khi đi xa", theme01],
              ["Bối cảnh di chuyển", theme02],
            ].map(([title, img]) => (
              <div
                key={title}
                className="group relative h-[210px] overflow-hidden rounded-2xl border border-[#d89a45]/30"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-black/65 px-3 py-2 text-[13px] font-bold">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Price() {
  return (
    <section id="price" className="bg-[#fff8ef] px-6 py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#a94f22]">
            Giá tốt hơn vì
          </p>

          <h2 className="mt-4 max-w-[620px] font-extrabold uppercase tracking-[-0.045em] leading-[1.06] text-[clamp(30px,7vw,48px)]">
  <span className="block">Chúng tôi</span>
  <span className="block">sản xuất trực tiếp</span>
</h2>

          <p className="mt-6 text-[17px] leading-8 text-[#4d382b]">
            Thay vì đặt hàng nước ngoài, chờ lâu và khó bảo hành, Cricket được
            sản xuất tại Việt Nam giúp khách hàng mua dễ hơn, nhận hàng nhanh
            hơn và được hỗ trợ trực tiếp khi cần.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {["Giá tốt hơn", "Giao hàng nhanh", "Hỗ trợ trực tiếp", "Linh hoạt đặt hàng"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#d8c2aa] bg-white p-5 text-center"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#a94f22] text-[#a94f22]">
                    ✓
                  </div>
                  <p className="text-[13px] font-extrabold uppercase">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricePlans.map((item) => (
            <article
              key={item.name}
              className={`rounded-3xl bg-white p-6 text-center shadow-[0_18px_45px_rgba(80,45,20,.12)] ${
                item.highlight
                  ? "border-2 border-[#a94f22]"
                  : "border border-[#d8c2aa]"
              }`}
            >
              {item.highlight && (
                <div className="mx-auto mb-4 w-fit rounded-full bg-[#a94f22] px-4 py-2 text-[12px] font-extrabold uppercase text-white">
                  Đề xuất
                </div>
              )}

              <h3 className="text-[19px] font-extrabold uppercase">
                {item.name}
              </h3>

              <p className="mt-2 min-h-12 text-[13px] font-semibold leading-5 text-[#4d382b]">
                {item.desc}
              </p>

              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mt-5 h-[118px] w-full rounded-2xl object-cover"
              />

              <strong className="my-6 block text-[30px] font-black text-[#a94f22]">
                {item.price}
              </strong>

              <ul className="mb-7 space-y-2 text-left text-[13px] leading-5 text-[#4d382b]">
                {item.features.map((f) => (
                  <li key={f}>◎ {f}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-block rounded-xl bg-[#a94f22] px-6 py-4 text-[13px] font-extrabold uppercase text-white"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(180deg,#050403,#160c06,#050403)] px-6 py-14 text-white md:py-12"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 text-center lg:grid-cols-[0.36fr_1fr_0.75fr_0.85fr] lg:text-left">
        <div className="mx-auto h-[150px] w-[150px] overflow-hidden rounded-[26px] bg-[#120904] shadow-[0_22px_55px_rgba(0,0,0,.45),0_0_34px_rgba(216,154,69,.12)] lg:mx-0 lg:h-[170px] lg:w-[170px]">
          <div className="relative h-full w-full">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,154,69,.22)_0%,rgba(216,154,69,.08)_42%,rgba(0,0,0,0)_72%)]" />

            <img
              src={mascot02}
              alt="Mascot Cricket"
              className="relative z-10 h-full w-full scale-[1.12] object-cover object-center opacity-100 brightness-[1.16] contrast-[1.08]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-[#d89a45]/30" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_56%,rgba(0,0,0,.22)_100%)]" />
          </div>
        </div>

        <div className="mx-auto max-w-[330px] lg:mx-0 lg:max-w-none">
          <p className="text-[20px] font-extrabold uppercase leading-tight tracking-[-0.04em] md:text-[22px]">
            Bảo vệ đồ vật quan trọng
          </p>
          <h2 className="mt-1 text-[30px] font-black uppercase leading-tight tracking-[-0.05em] md:text-[34px]">
            Cricket luôn ở đây
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[330px] rounded-2xl border border-[#d89a45]/20 bg-white/[0.04] p-5 lg:max-w-none lg:border-l lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:pl-8">
          <p className="text-[13px] font-extrabold uppercase text-[#d89a45]">
            Tư vấn nhanh
          </p>
          <p className="mt-1 text-[30px] font-black leading-none text-[#d89a45]">
            0918 099 904
          </p>
          <p className="mt-2 text-[13px] text-[#d8c4ac]">(Zalo / Call / SMS)</p>
        </div>

        <div className="mx-auto w-full max-w-[330px] rounded-2xl border border-[#d89a45]/20 bg-white/[0.04] p-5 lg:max-w-none lg:border-l lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:pl-8">
          <p className="text-[13px] font-extrabold uppercase text-[#d89a45]">
            Đặt hàng & hợp tác
          </p>
          <p className="mt-1 break-words text-[26px] font-black leading-tight md:text-[28px]">
            hello@cricket.vn
          </p>
          <p className="mt-2 text-[13px] text-[#d8c4ac]">Phản hồi trong 24h</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d89a45]/25 bg-[#050403] px-6 py-10 text-white md:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
        <img
          src={logo}
          alt="Cricket"
          className="h-11 rounded-md bg-white p-1"
        />

        <div>
          <p className="font-extrabold uppercase leading-tight">
            Cricket Việt Nam
          </p>
          <p className="mt-1 text-[13px] text-[#d8c4ac]">
            Két an toàn gắn tựa đầu ghế xe hơi
          </p>
        </div>

        <p className="text-[13px] text-[#d8c4ac]">
          © 2026 Cricket Vietnam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="bg-[#f7efe5] text-[#160d08]">
      <Header />
      <Hero />
      <UseCases />
      <Trust />
      <Price />
      <ContactStrip />
      <Footer />
    </main>
  );
}