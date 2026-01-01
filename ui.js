/* =====================================================
Carousel Controller (Home) 首頁輪播控制器
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
const items = Array.from(document.querySelectorAll(".carousel-item"));
  if (items.length === 0) return; // 不是首頁就不跑

const dots = Array.from(document.querySelectorAll(".dot"));
const prevBtn = document.querySelector(".arrow-prev");
const nextBtn = document.querySelector(".arrow-next");

const total = items.length;
let current = 0;
let autoplayId = null;

function updateClasses() {
    items.forEach((item, index) => {
    item.classList.remove("current", "prev", "next", "hidden");

    if (index === current) {
        item.classList.add("current");
    } else if (index === (current - 1 + total) % total) {
        item.classList.add("prev");
    } else if (index === (current + 1) % total) {
        item.classList.add("next");
    } else {
        item.classList.add("hidden");
    }
    });

    if (dots.length) {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === current);
    });
    }
}

function goTo(index) {
    current = (index + total) % total;
    updateClasses();
}

function nextSlide() {
    goTo(current + 1);
}

function prevSlide() {
    goTo(current - 1);
}

function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(nextSlide, 2500);
}

function stopAutoplay() {
    if (autoplayId) {
    clearInterval(autoplayId);
    autoplayId = null;
    }
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoplay();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoplay();
    });
}

if (dots.length) {
    dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        goTo(index);
        startAutoplay();
    });
    });
}

updateClasses();
startAutoplay();
});




/* =====================================================
Nav Scroll Blur 上方導覽頁面模糊效果
===================================================== */

const nav = document.querySelector("nav");

if (nav) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 180) {
            nav.classList.add("nav-blur");
        } else {
            nav.classList.remove("nav-blur");
        }
    });
}

/* =====================================================
Back To Top Button返回頂部按鈕
===================================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}





/* =====================================================
contact form success message 聯絡表單成功訊息
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
console.log('contact form js ready');

const form = document.querySelector('.contact-form');
const successMsg = document.querySelector('.form-success');
const submitBtn = document.querySelector('.btn-submit');

if (!form || !successMsg || !submitBtn) {
    console.warn('contact form elements not found');
    return;
}

  const MIN_LOADING_TIME = 600; // ★ 正式上線也至少顯示 600ms

const showSuccess = (text) => {
    successMsg.textContent = text;
    successMsg.classList.add('is-visible');

    setTimeout(() => {
    successMsg.classList.add('is-hiding');
    setTimeout(() => {
        successMsg.classList.remove('is-visible', 'is-hiding');
    }, 900);
    }, 5000);
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const startTime = Date.now(); // ★ 記下開始時間

    // 立刻切換「傳送中…」
    submitBtn.disabled = true;
    submitBtn.textContent = '傳送中…';
    submitBtn.style.opacity = '0.6';

    const isLocal =
    location.hostname === '127.0.0.1' ||
    location.hostname === 'localhost';

    // 本機測試（模擬成功）
    if (isLocal) {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {
        showSuccess('（本機測試）已顯示成功訊息');
        submitBtn.disabled = false;
        submitBtn.textContent = '傳送';
        submitBtn.style.opacity = '1';
        form.reset();
    }, remaining);

    return;
    }

    // Netlify 真實送出
    try {
    const formData = new FormData(form);

    const res = await fetch('/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
    });

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {
        if (res.ok) {
        showSuccess('已收到，會在 1–3 日內回覆。');
        form.reset();
        } else {
        showSuccess('傳送失敗，請稍後再試。');
        }

        submitBtn.disabled = false;
        submitBtn.textContent = '傳送';
        submitBtn.style.opacity = '1';
    }, remaining);

    } catch (err) {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {
        showSuccess('傳送失敗，請檢查網路。');
        submitBtn.disabled = false;
        submitBtn.textContent = '傳送';
        submitBtn.style.opacity = '1';
    }, remaining);
    }
});
});