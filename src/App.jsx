import { useEffect, useState } from "react";

import logo from "./assets/logo-cricket.png";
import mascot from "./assets/mascot-cricket.png";
import mascot02 from "./assets/mascot-cricket-02.png";

import product01 from "./assets/product-01.jpg";
import product02 from "./assets/product-02.jpg";
import product03 from "./assets/product-03.jpg";
import product04 from "./assets/product-04.jpg";
import product05 from "./assets/product-05.jpg";
import product06 from "./assets/product-06.jpg";

import theme01 from "./assets/theme-01.jpg";
import theme02 from "./assets/theme-02.jpg";

import "./App.css";

const CONTACT = {
  phoneDisplay: "0918 099 904",
  phoneHref: "tel:+84918099904",
  zaloHref: "https://zalo.me/0918099904",
  email: "hello@cricket.vn",
};

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

const productVariants = [
  {
    name: "Đen",
    code: "TT1",
    images: [
      { label: "G1", src: "/products/cricket-tt1-black-g1.jpg" },
      { label: "G2", src: "/products/cricket-tt1-black-g2.jpg" },
    ],
  },
  {
    name: "Nâu",
    code: "TT8",
    images: [
      { label: "G1", src: "/products/cricket-tt8-brown-g1.jpg" },
      { label: "G2", src: "/products/cricket-tt8-brown-g2.jpg" },
    ],
  },
  {
    name: "Kem",
    code: "TT5",
    images: [
      { label: "G1", src: "/products/cricket-tt5-beige-g1.jpg" },
      { label: "G2", src: "/products/cricket-tt5-beige-g2.jpg" },
    ],
  },
  {
    name: "Xám",
    code: "TT2A",
    images: [
      { label: "G1", src: "/products/cricket-tt2a-gray-g1.jpg" },
      { label: "G2", src: "/products/cricket-tt2a-gray-g2.jpg" },
    ],
  },
];

const videoItems = [
  {
    id: "clip01",
    title: "Khám phá Cricket",
    text: "Xem tổng quan sản phẩm, cách thao tác và trải nghiệm thực tế trên xe.",
    image: "/products/cricket-tt1-black-g2.jpg",
    videoSrc: "/videos/clip01.mp4",
  },
  {
    id: "clip02",
    title: "Hướng dẫn lắp đặt",
    text: "Hướng dẫn theo 2 phần: chuẩn bị, lắp đặt, hoàn thiện và kiểm tra.",
    image: theme01,
    videoParts: [
      { label: "Phần 1", src: "/videos/clip07a.mp4" },
      { label: "Phần 2", src: "/videos/clip07b.mp4" },
    ],
  },
  {
    id: "clip03",
    title: "Cất giữ đồ quan trọng",
    text: "Không gian kín đáo cho tiền mặt, giấy tờ và vật dụng quan trọng trên xe.",
    image: product01,
    videoSrc: "/videos/clip02.mp4",
  },
  {
    id: "clip04",
    title: "Giấy tờ gọn gàng, dễ tìm",
    text: "Giữ giấy tờ xe ngăn nắp và thuận tiện lấy ra khi cần.",
    image: product04,
    videoSrc: "",
  },
  {
    id: "clip05",
    title: "Không gian riêng tư",
    text: "Nơi cất giữ kín đáo cho vật dụng cá nhân cần sự riêng tư.",
    image: product05,
    videoSrc: "",
  },
  {
    id: "clip06",
    title: "Cất điện thoại an toàn",
    text: "Một vị trí gọn gàng cho điện thoại và các vật dụng thiết yếu.",
    image: product06,
    videoSrc: "",
  },
  {
    id: "clip07",
    title: "Gọn gàng mỗi hành trình",
    text: "Giúp khoang xe ngăn nắp hơn trong mọi chuyến đi hằng ngày.",
    image: "/products/cricket-journey-tidy.png",
    videoSrc: "",
  },
  {
    id: "clip08",
    title: "Chọn phù hợp, dùng thực tế",
    text: "Chọn phiên bản phù hợp và hình dung trải nghiệm sau khi lắp trên xe.",
    image: theme02,
    videoSrc: "",
  },
];

const trustItems = [
  ["Sản xuất trực tiếp", "Chủ động kiểm soát chất lượng"],
  ["Dễ lắp đặt", "Tối ưu cho tựa đầu ghế xe"],
  ["Bảo hành rõ ràng", "Hỗ trợ nhanh khi cần"],
  ["Mua lẻ vẫn hỗ trợ", "Phù hợp cá nhân và đội xe"],
];


const lockGuideItems = [
  {
    title: "Mở khóa",
    lines: [
      "Nhập mật khẩu 4–16 chữ số rồi nhấn OK.",
      "Nếu mật khẩu đúng, khóa phát âm báo dài khoảng 2 giây và đèn báo sáng; thao tác xoay mở trong vòng 3 giây.",
      "Nhập sai mật khẩu 4 lần liên tiếp sẽ khóa bàn phím trong 50 giây.",
    ],
  },
  {
    title: "Thiết lập mật khẩu quản trị",
    lines: [
      "Ở trạng thái đã mở bằng mật khẩu quản trị, nhấn giữ phím 1 đến khi nghe âm báo dài, sau đó nhấn OK.",
      "Khi đèn nhấp nháy, nhập mật khẩu mới 4–16 chữ số rồi nhấn OK để hoàn tất.",
    ],
  },
  {
    title: "Thiết lập mật khẩu người dùng",
    lines: [
      "Ở trạng thái mở bằng mật khẩu quản trị, nhấn giữ phím 2 đến khi nghe âm báo dài, sau đó nhấn OK.",
      "Khi đèn nhấp nháy, nhập mật khẩu 4–16 chữ số rồi nhấn OK.",
      "Theo tài liệu đi kèm, mật khẩu người dùng và mật khẩu quản trị không được giống nhau; khi dùng mật khẩu quản trị để mở khóa, mật khẩu người dùng sẽ tự động bị xóa và cần thiết lập lại.",
    ],
  },
  {
    title: "Mật khẩu tạm thời",
    lines: [
      "Ở trạng thái mở bằng mật khẩu người dùng hoặc quản trị, nhấn giữ phím 3 đến khi nghe âm báo dài, sau đó nhấn OK.",
      "Nhập mật khẩu tạm thời 4–16 chữ số rồi nhấn OK. Mật khẩu tạm thời mất hiệu lực sau một lần mở khóa.",
    ],
  },
  {
    title: "Bật / tắt mật khẩu giả",
    lines: [
      "Ở trạng thái mở khóa, nhấn giữ phím 4 đến khi nghe âm báo dài và đèn nhấp nháy, sau đó nhấn OK để chuyển trạng thái.",
      "Khi chức năng mật khẩu giả được bật, có thể nhập thêm các chữ số trước hoặc sau mật khẩu đúng; khóa vẫn mở nếu chuỗi nhập liên tục chứa mật khẩu chính xác.",
    ],
  },
  {
    title: "Bật / tắt âm báo",
    lines: [
      "Ở trạng thái mở khóa, nhấn giữ phím 5 đến khi nghe âm báo dài và đèn nhấp nháy, sau đó nhấn OK để tắt còi.",
      "Lặp lại thao tác để bật lại âm báo.",
    ],
  },
  {
    title: "Chế độ công khai",
    lines: [
      "Ở trạng thái mở khóa, nhấn giữ phím 6 đến khi nghe âm báo dài và đèn nhấp nháy, sau đó nhấn OK để chuyển trạng thái chế độ công khai.",
      "Trong chế độ công khai, có thể thiết lập mật khẩu cho một lần sử dụng; sau khi mở khóa thành công, mật khẩu đó mất hiệu lực.",
    ],
  },
  {
    title: "Quên mật khẩu / khôi phục",
    lines: [
      "Ghi lại số sê-ri của khóa và cung cấp thông tin cần thiết để xác minh.",
      "Theo tài liệu, sau khi xác minh, nhà sản xuất sẽ cung cấp khóa giải mã để thực hiện khôi phục qua cổng USB của khóa.",
    ],
  },
];

const installationSheets = [
  {
    title: "Tài liệu hướng dẫn đi kèm",
    text: "Bìa tài liệu lắp đặt Cricket.",
    src: "/support/cricket-install-01.jpg",
  },
  {
    title: "Chuẩn bị & lắp cụm ty",
    text: "Kiểm tra phụ kiện, căn khoảng cách hai ty theo ghế và dùng ống đệm phù hợp nếu cần.",
    src: "/support/cricket-install-02.jpg",
  },
  {
    title: "Gắn tựa đầu & kiểm tra an toàn",
    text: "Cố định cụm ty vào tựa đầu, lắp vào ghế và kiểm tra độ chắc chắn trước khi sử dụng.",
    src: "/support/cricket-install-03.jpg",
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

        <nav className="hidden items-center gap-8 text-[13px] font-extrabold uppercase tracking-[0.02em] text-white/85 lg:flex">
          <a href="#product" className="transition hover:text-[#e3a44e]">
            Sản phẩm
          </a>
          <a href="#use" className="transition hover:text-[#e3a44e]">
            Sử dụng
          </a>
          <a href="#videos" className="transition hover:text-[#e3a44e]">
            Video
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
          href="#price"
          className="rounded-xl bg-gradient-to-r from-[#d89a45] to-[#a94f22] px-5 py-3 text-[12px] font-extrabold uppercase text-white shadow-xl shadow-[#a94f22]/30 sm:px-6 sm:text-[13px]"
        >
          Xem giá
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [heroVideoOpen, setHeroVideoOpen] = useState(false);

  useEffect(() => {
    if (!heroVideoOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setHeroVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [heroVideoOpen]);

  return (
    <>
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
              <div key={title} className="min-w-0 border-l border-[#d89a45]/35 pl-4">
                <h3 className="whitespace-nowrap text-[15px] font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-[#cdb8a4]">{sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#price"
              className="rounded-xl bg-gradient-to-r from-[#d89a45] to-[#a94f22] px-8 py-4 text-[14px] font-extrabold uppercase text-white shadow-xl shadow-[#a94f22]/30"
            >
              Xem giá bán lẻ
            </a>

            <button
              type="button"
              onClick={() => setHeroVideoOpen(true)}
              className="rounded-xl border border-[#d89a45]/70 bg-black/30 px-8 py-4 text-[14px] font-extrabold uppercase text-white transition hover:border-[#d89a45] hover:bg-black/55"
            >
              ▶ Xem video thực tế
            </button>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div
            role="button"
            tabIndex={0}
            aria-label="Phát video sản phẩm Cricket"
            onClick={() => setHeroVideoOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setHeroVideoOpen(true);
              }
            }}
            className="absolute left-[32px] top-[84px] w-[74%] cursor-pointer overflow-hidden rounded-[26px] border-[8px] border-[#120904] bg-[#120904] shadow-[0_36px_90px_rgba(0,0,0,.65)] outline-none transition focus-visible:ring-2 focus-visible:ring-[#d89a45]"
          >
            <img
              src={product03}
              alt="Két bí mật gắn tựa đầu ghế xe Cricket"
              className="h-[390px] w-full rounded-[18px] object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => setHeroVideoOpen(true)}
            className="absolute bottom-[118px] left-[68px] flex items-center gap-4 rounded-2xl border border-white/20 bg-black/65 px-6 py-4 text-left backdrop-blur transition hover:border-[#d89a45]/70 hover:bg-black/80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-lg">
              ▶
            </div>
            <div>
              <p className="text-[13px] font-black uppercase">Video sản phẩm</p>
              <p className="mt-1 text-[13px] font-semibold text-[#d8c4ac]">Xem video thực tế</p>
            </div>
          </button>
        </div>
      </div>
    </section>

    {heroVideoOpen && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Video sản phẩm Cricket"
        onClick={() => setHeroVideoOpen(false)}
      >
        <div
          className="relative w-full max-w-[960px] overflow-hidden rounded-2xl border border-[#d89a45]/45 bg-[#120904] shadow-[0_30px_100px_rgba(0,0,0,.8)]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setHeroVideoOpen(false)}
            aria-label="Đóng video"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/75 text-xl font-bold text-white backdrop-blur transition hover:border-[#d89a45]/70 hover:bg-black"
          >
            ×
          </button>

          <div className="aspect-video bg-black">
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={product01}
              className="h-full w-full bg-black object-contain"
            >
              <source src="/videos/clip02.mp4" type="video/mp4" />
              Trình duyệt của bạn chưa hỗ trợ phát video.
            </video>
          </div>

          <div className="border-t border-[#d89a45]/20 px-5 py-4 sm:px-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d89a45]">
              Video sản phẩm
            </p>
            <h3 className="mt-1 text-[16px] font-extrabold uppercase text-white sm:text-[18px]">
              An toàn cất giữ vật dụng quan trọng
            </h3>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

function UseCases() {
  return (
    <section id="use" className="bg-[#f7efe5] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.22em] text-[#a94f22]">
          Dành cho nhiều dòng xe
        </p>

        <h2 className="mx-auto mt-3 max-w-[920px] text-center text-[clamp(28px,7vw,48px)] font-extrabold uppercase leading-[1.06] tracking-[-0.045em]">
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
              <img src={item.image} alt={item.title} className="h-[170px] w-full object-cover" />

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

function ProductVariantCard({ variant }) {
  const [activeImage, setActiveImage] = useState(0);
  const safeIndex = Math.min(activeImage, variant.images.length - 1);
  const current = variant.images[safeIndex];

  return (
    <article className="overflow-hidden rounded-3xl border border-[#d8c2aa] bg-white shadow-[0_22px_55px_rgba(80,45,20,.10)]">
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#f4ede5] p-4">
        <img
          key={current.src}
          src={current.src}
          alt={`Cricket màu ${variant.name} ${variant.code} ${current.label}`}
          className="h-full w-full object-contain transition duration-300"
        />
        <div className="absolute left-4 top-4 rounded-full border border-[#a94f22]/25 bg-white/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#6b351e] shadow-sm backdrop-blur">
          Mẫu thực tế
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#a94f22]">
              Mã màu {variant.code}
            </p>
            <h3 className="mt-1 text-[21px] font-black uppercase tracking-[-0.025em]">
              {variant.name}
            </h3>
          </div>

          <div className="flex gap-2">
            {variant.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-pressed={safeIndex === index}
                aria-label={`${variant.name} ${image.label}`}
                className={`min-w-11 rounded-lg border px-3 py-2 text-[11px] font-extrabold uppercase transition ${
                  safeIndex === index
                    ? "border-[#a94f22] bg-[#a94f22] text-white"
                    : "border-[#d8c2aa] bg-[#fffaf4] text-[#6b4b37] hover:border-[#a94f22]"
                }`}
              >
                {image.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[13px] leading-6 text-[#5c4638]">
          Hai góc ảnh thực tế giúp đối chiếu màu sắc và kiểu dáng trước khi chọn bộ phù hợp với nội thất xe.
        </p>
      </div>
    </article>
  );
}

function ProductVariants() {
  return (
    <section id="variants" className="bg-[#fffaf4] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#a94f22]">
            Chọn màu phù hợp nội thất
          </p>
          <h2 className="mt-4 text-[clamp(30px,7vw,48px)] font-extrabold uppercase leading-[1.06] tracking-[-0.045em]">
            4 phiên bản • Đồng bộ theo xe
          </h2>
          <p className="mx-auto mt-5 max-w-[740px] text-[16px] leading-7 text-[#5c4638]">
            Cricket có các tông đen, nâu, kem và xám để dễ lựa chọn theo màu ghế và phong cách nội thất của từng xe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productVariants.map((variant) => (
            <ProductVariantCard key={variant.code} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoMedia({ item }) {
  const sources = item.videoParts?.length
    ? item.videoParts
    : item.videoSrc
      ? [{ label: "Video", src: item.videoSrc }]
      : [];

  const [activePart, setActivePart] = useState(0);

  if (sources.length === 0) {
    return (
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur">
          {item.id}
        </div>
      </div>
    );
  }

  const safeIndex = Math.min(activePart, sources.length - 1);
  const currentSource = sources[safeIndex];

  return (
    <>
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          key={currentSource.src}
          controls
          playsInline
          preload="metadata"
          poster={item.image}
          className="h-full w-full bg-black object-contain"
        >
          <source src={currentSource.src} type="video/mp4" />
          Trình duyệt của bạn chưa hỗ trợ phát video.
        </video>
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur">
          {item.id}
        </div>
      </div>

      {sources.length > 1 && (
        <div className="grid grid-cols-2 gap-2 border-b border-[#d89a45]/15 bg-black/20 p-3">
          {sources.map((source, index) => (
            <button
              key={source.src}
              type="button"
              onClick={() => setActivePart(index)}
              aria-pressed={safeIndex === index}
              className={`rounded-lg border px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] transition ${
                safeIndex === index
                  ? "border-[#d89a45] bg-[#d89a45] text-[#140b05]"
                  : "border-[#d89a45]/35 bg-transparent text-[#e7d4bf] hover:border-[#d89a45]/70 hover:text-white"
              }`}
            >
              {source.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function VideoGallery() {
  return (
    <section id="videos" className="bg-[#120904] px-6 py-20 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#d89a45]">
            Trải nghiệm trực quan
          </p>
          <h2 className="mt-4 text-[clamp(30px,7vw,48px)] font-extrabold uppercase leading-[1.06] tracking-[-0.045em]">
            Khám phá Cricket qua video
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-[#dbc7b1]">
            Xem cách Cricket được giới thiệu, lắp đặt và ứng dụng trong các tình huống sử dụng thực tế trên xe.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videoItems.map((item, index) => {
            const hasVideo = Boolean(item.videoSrc || item.videoParts?.length);

            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-[#d89a45]/25 bg-white/[0.045] shadow-[0_18px_45px_rgba(0,0,0,.22)]"
              >
                <VideoMedia item={item} />

                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d89a45]">
                    {hasVideo ? "Video" : "Nội dung"} {String(index + 1).padStart(2, "0")}
                    {item.videoParts?.length ? " · 2 phần" : ""}
                  </p>
                  <h3 className="mt-2 min-h-[40px] text-[16px] font-extrabold uppercase leading-5 tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#d8c4ac]">{item.text}</p>
                </div>
              </article>
            );
          })}
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
            Sản phẩm được phát triển theo nhu cầu thực tế của người dùng xe hơi: cần một vị trí cất giữ kín đáo, dễ thao tác, không chiếm diện tích và phù hợp nhiều bối cảnh di chuyển.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {trustItems.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-[#d89a45]/25 bg-white/[0.04] p-5">
                <h3 className="text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#e3a44e]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#d8c4ac]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                title: "Mẫu mã thanh lịch",
                image: "/products/cricket-tt1-black-g1.jpg",
                fit: "contain",
              },
              {
                title: "Lắp đặt đồng bộ trên xe",
                image: product02,
                fit: "cover",
              },
              {
                title: "Thiết kế kín đáo • Đồng bộ tựa đầu",
                image: "/products/cricket-tt5-beige-g1.jpg",
                fit: "contain",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`group relative h-[210px] overflow-hidden rounded-2xl border border-[#d89a45]/30 ${
                  item.fit === "contain" ? "bg-[#efe4d7] p-3" : "bg-black"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full opacity-90 transition duration-300 group-hover:scale-[1.03] ${
                    item.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-2 text-[13px] font-bold">
                  {item.title}
                </span>
              </div>
            ))}

            <div className="group relative h-[210px] overflow-hidden rounded-2xl border border-[#d89a45]/30 bg-[#efe4d7] p-2">
              <div className="grid h-full grid-cols-2 grid-rows-2 gap-1.5">
                {[
                  "/products/cricket-tt1-black-g1.jpg",
                  "/products/cricket-tt8-brown-g1.jpg",
                  "/products/cricket-tt5-beige-g1.jpg",
                  "/products/cricket-tt2a-gray-g1.jpg",
                ].map((src, index) => (
                  <div key={src} className="overflow-hidden rounded-lg bg-white/75 p-1">
                    <img
                      src={src}
                      alt={["Đen TT1", "Nâu TT8", "Kem TT5", "Xám TT2A"][index]}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-2 text-[13px] font-bold">
                4 phiên bản đồng bộ nội thất
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DealerForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    const subject = "Yêu cầu báo giá đại lý Cricket";
    const body = [
      "Xin chào Cricket,",
      "",
      "Tôi muốn nhận chính sách và báo giá đại lý.",
      `Họ và tên: ${name}`,
      `Số điện thoại: ${phone}`,
      "",
      "Vui lòng liên hệ lại với tôi.",
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="dealer-name" className="mb-2 block text-left text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#6b4b37]">
          Họ và tên
        </label>
        <input
          id="dealer-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Nhập tên của bạn"
          className="w-full rounded-xl border border-[#d8c2aa] bg-[#fffaf4] px-4 py-3.5 text-[14px] font-semibold text-[#160d08] outline-none transition placeholder:text-[#9a806f] focus:border-[#a94f22] focus:ring-2 focus:ring-[#a94f22]/10"
        />
      </div>

      <div>
        <label htmlFor="dealer-phone" className="mb-2 block text-left text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#6b4b37]">
          Số điện thoại
        </label>
        <input
          id="dealer-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="Ví dụ: 0912 345 678"
          className="w-full rounded-xl border border-[#d8c2aa] bg-[#fffaf4] px-4 py-3.5 text-[14px] font-semibold text-[#160d08] outline-none transition placeholder:text-[#9a806f] focus:border-[#a94f22] focus:ring-2 focus:ring-[#a94f22]/10"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-[#a94f22] px-6 py-4 text-[13px] font-extrabold uppercase text-white transition hover:bg-[#8e3f1a]"
      >
        Nhận báo giá đại lý
      </button>

      <p className="text-center text-[12px] leading-5 text-[#735a49]">
        Tên và số điện thoại bạn cung cấp chỉ được Cricket sử dụng để liên hệ lại và tư vấn chính sách đại lý, không dùng cho mục đích khác.
      </p>
    </form>
  );
}

function Price() {
  return (
    <section id="price" className="bg-[#fff8ef] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[840px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#a94f22]">
            Chọn cách mua phù hợp
          </p>
          <h2 className="mt-4 text-[clamp(30px,7vw,48px)] font-extrabold uppercase leading-[1.06] tracking-[-0.045em]">
            Giá bán lẻ & chính sách đại lý
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-[#5c4638]">
            Bộ Cricket được thiết kế theo cặp để đồng bộ hơn với nội thất xe. Khách hàng đại lý có thể để lại thông tin ngắn gọn hoặc trao đổi trực tiếp qua Zalo.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border-2 border-[#a94f22] bg-white p-7 shadow-[0_24px_60px_rgba(80,45,20,.13)] md:p-8">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#a94f22] px-5 py-2.5 text-[11px] font-extrabold uppercase text-white">
              Giá bán lẻ
            </div>

            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a94f22]">
              Cricket — Bộ 2 gối đồng bộ
            </p>
            <h3 className="mt-3 text-[26px] font-black uppercase leading-tight">
              Một bộ hoàn chỉnh cho xe
            </h3>

            <img
              src={product03}
              alt="Bộ Cricket 2 gối đồng bộ"
              className="mt-6 h-[220px] w-full rounded-2xl object-cover"
            />

            <div className="mt-7 border-y border-[#ead8c4] py-6">
              <p className="text-[13px] font-bold uppercase text-[#6b4b37]">Giá bán lẻ</p>
              <strong className="mt-2 block text-[clamp(32px,6vw,44px)] font-black leading-none text-[#a94f22]">
                2.800.000 VND
              </strong>
              <p className="mt-2 text-[15px] font-extrabold uppercase text-[#4d382b]">/ cặp</p>
            </div>

            <ul className="mt-6 space-y-3 text-[14px] font-semibold leading-6 text-[#4d382b]">
              <li>✓ 01 gối có két an toàn Cricket</li>
              <li>✓ 01 gối phụ đồng bộ theo xe</li>
              <li>✓ Thiết kế đồng bộ với nội thất</li>
              <li>✓ Tư vấn lựa chọn trước khi đặt hàng</li>
            </ul>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={CONTACT.zaloHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#a94f22] px-6 py-4 text-center text-[13px] font-extrabold uppercase text-white"
              >
                Tư vấn qua Zalo
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-xl border border-[#a94f22] px-6 py-4 text-center text-[13px] font-extrabold uppercase text-[#a94f22]"
              >
                Gọi {CONTACT.phoneDisplay}
              </a>
            </div>
          </article>

          <article className="rounded-3xl border border-[#d8c2aa] bg-white p-7 shadow-[0_24px_60px_rgba(80,45,20,.10)] md:p-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a94f22]">
              Dành cho đối tác
            </p>
            <h3 className="mt-3 text-[26px] font-black uppercase leading-tight">
              Nhận báo giá đại lý
            </h3>
            <p className="mt-4 text-[14px] leading-6 text-[#5c4638]">
              Giá đại lý không niêm yết công khai. Chỉ cần để lại tên và số điện thoại để Cricket liên hệ, hoặc nhắn trực tiếp qua Zalo.
            </p>

            <DealerForm />

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#ead8c4]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#8b7464]">hoặc</span>
              <span className="h-px flex-1 bg-[#ead8c4]" />
            </div>

            <a
              href={CONTACT.zaloHref}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border-2 border-[#a94f22] px-6 py-4 text-center text-[13px] font-extrabold uppercase text-[#a94f22] transition hover:bg-[#fff4e8]"
            >
              Nhắn trực tiếp Zalo
            </a>
          </article>
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
          <p className="text-[13px] font-extrabold uppercase text-[#d89a45]">Tư vấn nhanh</p>
          <a href={CONTACT.phoneHref} className="mt-1 block text-[30px] font-black leading-none text-[#d89a45]">
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.zaloHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-[13px] text-[#d8c4ac] underline decoration-[#d89a45]/40 underline-offset-4"
          >
            Zalo / Call / SMS
          </a>
        </div>

        <div className="mx-auto w-full max-w-[330px] rounded-2xl border border-[#d89a45]/20 bg-white/[0.04] p-5 lg:max-w-none lg:border-l lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:pl-8">
          <p className="text-[13px] font-extrabold uppercase text-[#d89a45]">Đặt hàng & hợp tác</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-1 block break-words text-[26px] font-black leading-tight md:text-[28px]"
          >
            {CONTACT.email}
          </a>
          <p className="mt-2 text-[13px] text-[#d8c4ac]">Phản hồi trong 24h</p>
        </div>
      </div>
    </section>
  );
}


function SupportCenter() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Hỗ trợ sản phẩm | Cricket";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#160d08]">
      <header className="sticky top-0 z-40 border-b border-[#d89a45]/20 bg-[#050403]/95 px-5 py-3 text-white backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="Về trang chủ Cricket">
            <img src={logo} alt="Cricket" className="h-11 rounded-md bg-white p-1" />
            <div className="hidden sm:block">
              <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#d89a45]">Cricket Vietnam</p>
              <p className="text-[13px] font-semibold text-[#ead8c4]">Trung tâm hỗ trợ</p>
            </div>
          </a>
          <a
            href="/"
            className="rounded-xl border border-[#d89a45]/45 px-4 py-2.5 text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#f5dfc5] transition hover:bg-[#d89a45]/10"
          >
            Trang chủ
          </a>
        </div>
      </header>

      <section className="bg-[radial-gradient(circle_at_top_right,rgba(216,154,69,.18),transparent_34%),linear-gradient(180deg,#0b0603,#160b05)] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#d89a45]">QR Support Center</p>
          <h1 className="mt-4 max-w-[780px] text-[clamp(36px,8vw,68px)] font-black uppercase leading-[0.98] tracking-[-0.055em]">
            Hướng dẫn & hỗ trợ Cricket
          </h1>
          <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-[#e5d2bd] md:text-[18px]">
            Tra cứu nhanh cách sử dụng khóa, hướng dẫn lắp đặt và kênh hỗ trợ bảo hành ngay trên điện thoại.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a href="#lock-guide" className="rounded-2xl bg-[#d89a45] px-5 py-4 text-center text-[13px] font-black uppercase text-[#170d07] shadow-[0_12px_30px_rgba(216,154,69,.18)]">
              Hướng dẫn khóa
            </a>
            <a href="#installation" className="rounded-2xl border border-[#d89a45]/45 bg-white/[0.04] px-5 py-4 text-center text-[13px] font-black uppercase text-white">
              Hướng dẫn lắp đặt
            </a>
            <a href="#warranty" className="rounded-2xl border border-[#d89a45]/45 bg-white/[0.04] px-5 py-4 text-center text-[13px] font-black uppercase text-white">
              Bảo hành
            </a>
          </div>
        </div>
      </section>

      <section id="lock-guide" className="scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#a94f22]">01 · Hướng dẫn sử dụng khóa</p>
            <h2 className="mt-3 text-[32px] font-black uppercase leading-tight tracking-[-0.04em] md:text-[46px]">Các thao tác cần biết</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#684d3b]">
              Nội dung được biên tập ngắn gọn từ tài liệu hướng dẫn đi kèm sản phẩm để dễ tra cứu trên điện thoại.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[#d9bea1] bg-white p-6 shadow-[0_18px_45px_rgba(80,45,20,.08)]">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#a94f22]">Thông số mặc định</p>
              <p className="mt-3 text-[30px] font-black">1234</p>
              <p className="mt-1 text-[14px] font-bold">Mật khẩu quản trị mặc định</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[13px]">
                <div className="rounded-xl bg-[#f7efe5] p-3"><strong>Mật khẩu giả:</strong><br />Bật</div>
                <div className="rounded-xl bg-[#f7efe5] p-3"><strong>Còi báo:</strong><br />Bật</div>
                <div className="rounded-xl bg-[#f7efe5] p-3"><strong>Chế độ công khai:</strong><br />Tắt</div>
                <div className="rounded-xl bg-[#f7efe5] p-3"><strong>Mật khẩu người dùng:</strong><br />Chưa có</div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d89a45]/35 bg-[#160c06] p-6 text-white shadow-[0_18px_45px_rgba(0,0,0,.16)]">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#d89a45]">Tín hiệu âm thanh</p>
              <div className="mt-4 space-y-3 text-[14px] leading-6 text-[#ead8c4]">
                <p><strong className="text-white">Âm ngắn “tick”:</strong> âm phím.</p>
                <p><strong className="text-white">Âm dài khoảng 2 giây:</strong> thao tác thành công.</p>
                <p><strong className="text-white">“tick... tick”:</strong> thao tác hoặc mật khẩu sai.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {lockGuideItems.map((item, index) => (
              <details key={item.title} className="overflow-hidden rounded-2xl border border-[#d8c2aa] bg-white shadow-[0_10px_30px_rgba(70,40,20,.05)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6">
                  <span className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#160c06] text-[12px] font-black text-[#d89a45]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-black uppercase tracking-[-0.01em] md:text-[15px]">{item.title}</span>
                  </span>
                  <span className="text-[24px] font-light text-[#a94f22]">+</span>
                </summary>
                <div className="border-t border-[#ead8c4] px-5 py-5 md:px-6">
                  <div className="space-y-3 text-[14px] leading-7 text-[#604838]">
                    {item.lines.map((line) => (
                      <p key={line} className="flex gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89a45]" />
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#b64f27]/25 bg-[#fff4e8] p-6 md:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#a94f22]">Lưu ý an toàn</p>
            <div className="mt-4 grid gap-3 text-[14px] leading-6 text-[#5d4434] sm:grid-cols-2">
              <p>• Đảm bảo nguồn sạc có đầu ra 5V.</p>
              <p>• Không để khóa tiếp xúc với nước hoặc chất lỏng.</p>
              <p>• Không đưa vật lạ vào cổng hoặc lỗ khóa.</p>
              <p>• Không đặt khóa vào lửa hoặc gần khí dễ cháy, dễ nổ.</p>
              <p>• Khi đèn báo pin yếu nhấp nháy, hãy sạc kịp thời.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="scroll-mt-24 bg-[#0b0704] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#d89a45]">02 · Hướng dẫn lắp đặt</p>
          <h2 className="mt-3 text-[32px] font-black uppercase leading-tight tracking-[-0.04em] md:text-[46px]">Lắp đúng ngay từ đầu</h2>
          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#d8c4ac]">
            Xem trực tiếp các trang hướng dẫn lắp gối đi kèm sản phẩm. Chạm vào ảnh để mở kích thước lớn khi cần đối chiếu chi tiết.
          </p>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {installationSheets.map((sheet, index) => (
              <article key={sheet.src} className="overflow-hidden rounded-3xl border border-[#d89a45]/25 bg-white/[0.05]">
                <a href={sheet.src} target="_blank" rel="noreferrer" className="block bg-[#8fd5f1]">
                  <img src={sheet.src} alt={sheet.title} className="aspect-[3/4] w-full object-contain" />
                </a>
                <div className="p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#d89a45]">Trang {index + 1}</p>
                  <h3 className="mt-2 text-[17px] font-black uppercase leading-tight">{sheet.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#d8c4ac]">{sheet.text}</p>
                  <a href={sheet.src} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[12px] font-extrabold uppercase text-[#e2a54e] underline underline-offset-4">
                    Xem ảnh toàn màn hình
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="warranty" className="scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-8 rounded-[32px] border border-[#d8c2aa] bg-white p-7 shadow-[0_24px_60px_rgba(80,45,20,.10)] md:p-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#a94f22]">03 · Bảo hành</p>
              <h2 className="mt-3 text-[32px] font-black uppercase leading-tight tracking-[-0.04em] md:text-[44px]">Bảo hành & hỗ trợ sau mua</h2>
              <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-[#604838]">
                Để kiểm tra chính sách bảo hành áp dụng cho sản phẩm của bạn, vui lòng liên hệ Cricket qua Zalo hoặc Hotline. Thời hạn, phạm vi và điều kiện bảo hành chi tiết sẽ được cập nhật tại trang này sau khi chính sách chính thức được xác nhận.
              </p>
              <p className="mt-4 text-[13px] leading-6 text-[#876b58]">
                Khi liên hệ, hãy chuẩn bị thông tin mua hàng và số sê-ri của sản phẩm nếu có để việc hỗ trợ thuận tiện hơn.
              </p>
            </div>

            <div className="space-y-3">
              <a href={CONTACT.zaloHref} target="_blank" rel="noreferrer" className="block rounded-2xl bg-[#a94f22] px-6 py-4 text-center text-[13px] font-black uppercase text-white shadow-[0_12px_30px_rgba(169,79,34,.18)]">
                Nhắn Zalo hỗ trợ
              </a>
              <a href={CONTACT.phoneHref} className="block rounded-2xl border-2 border-[#a94f22] px-6 py-4 text-center text-[13px] font-black uppercase text-[#a94f22]">
                Gọi {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d89a45]/20 bg-[#050403] px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-black uppercase">Cricket Việt Nam</p>
            <p className="mt-1 text-[12px] text-[#d8c4ac]">Hướng dẫn sử dụng · Lắp đặt · Bảo hành</p>
          </div>
          <a href="/" className="text-[12px] font-extrabold uppercase text-[#d89a45] underline underline-offset-4">Về cricket.vn</a>
        </div>
      </footer>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d89a45]/25 bg-[#050403] px-6 py-10 text-white md:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
        <img src={logo} alt="Cricket" className="h-11 rounded-md bg-white p-1" />

        <div>
          <p className="font-extrabold uppercase leading-tight">Cricket Việt Nam</p>
          <p className="mt-1 text-[13px] text-[#d8c4ac]">Két an toàn gắn tựa đầu ghế xe hơi</p>
        </div>

        <p className="text-[13px] text-[#d8c4ac]">© 2026 Cricket Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/ho-tro") {
    return <SupportCenter />;
  }

  return (
    <main className="bg-[#f7efe5] text-[#160d08]">
      <Header />
      <Hero />
      <UseCases />
      <ProductVariants />
      <VideoGallery />
      <Trust />
      <Price />
      <ContactStrip />
      <Footer />
    </main>
  );
}
