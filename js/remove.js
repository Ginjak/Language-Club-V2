(() => {
  document.addEventListener("DOMContentLoaded", function () {
    let h = document.querySelectorAll("a");
    h.forEach(function (n) {
      n.addEventListener("click", function () {
        n.classList.contains("btn-header") ||
          (h.forEach(function (e) {
            e.style.color = "";
          }),
          (n.style.color = "#FE504F"));
      });
    }),
      document.addEventListener("click", function (n) {
        n.target.closest("a") ||
          h.forEach(function (e) {
            e.style.color = "";
          });
      }),
      document.querySelector("header#masthead") && E(),
      document.querySelector(".slides-container") && L(),
      document.querySelector(".testimonials-slider") && q(),
      document.querySelector(".animate-number") && g(),
      document.querySelector(".promises-slider") && W(),
      document.querySelector(".number-slider") && X(),
      document.querySelector(".team-slider") && b(),
      document.querySelector(".sticky-posts") && A(),
      document.querySelector(".entry-content .wp-block-video") &&
        document.querySelectorAll(".wp-block-video").forEach(function (e) {
          e.classList.add("relative");
          let l = document.createElement("button");
          l.classList.add("play-button"),
            (l.innerHTML = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M18.2891 30.971V15.0054L30.8601 22.9882L18.2891 30.971ZM23 0C10.3182 0 0 10.3182 0 23C0 35.6818 10.3182 46 23 46C35.6818 46 46 35.6818 46 23C46 10.3182 35.6818 0 23 0Z" fill="white" />
</svg>`),
            e.appendChild(l),
            e.querySelector("video").removeAttribute("controls"),
            l.addEventListener("click", function () {
              e.querySelector("video").play(),
                (e.querySelector(".play-button").style.display = "none"),
                e.querySelector("video").setAttribute("controls", "controls");
            });
        }),
      document.querySelector(".video") &&
        document.querySelectorAll(".video").forEach(function (e) {
          e.querySelector("video") &&
            e
              .querySelector(".play-button")
              .addEventListener("click", function () {
                e.querySelector("video").play(),
                  e.querySelector("video").setAttribute("controls", "controls"),
                  (e.querySelector(".play-button").style.display = "none");
              }),
            window.addEventListener("scroll", function () {
              e.getBoundingClientRect().top < window.innerHeight / 2
                ? (e.classList.remove("w-3/5"), e.classList.add("w-full"))
                : (e.classList.remove("w-full"), e.classList.add("w-3/5"));
            });
        });
  });
  function E() {
    let h = document.querySelector("header#masthead");
    window.addEventListener("scroll", function () {
      window.scrollY > 25
        ? h.classList.add("scrolled")
        : h.classList.remove("scrolled");
    }),
      window.addEventListener("scroll", function () {
        window.scrollY > 25
          ? h.classList.add("scrolled")
          : h.classList.remove("scrolled");
      });
    let n = document.querySelector("#open-menu");
    n.addEventListener("click", function () {
      h.classList.contains("open")
        ? (h
            .querySelector(".header-menu .scroll-red")
            .classList.remove("overflow-auto"),
          h
            .querySelector(".header-menu .scroll-red")
            .classList.add("overflow-hidden"),
          h.classList.remove("open"),
          (n.querySelector("span").innerText = "MENU"))
        : (h
            .querySelector(".header-menu .scroll-red")
            .classList.remove("overflow-hidden"),
          h
            .querySelector(".header-menu .scroll-red")
            .classList.add("overflow-auto"),
          h.classList.add("open"),
          (n.querySelector("span").innerText = "CLOSE"));
    });
    let e = h.querySelectorAll(".menu-link "),
      l = h.querySelector(".menu-opacity"),
      o = 0;
    e.forEach(function (s) {
      s.addEventListener("click", function (i) {
        let t = s.dataset.parentid,
          d = h.querySelector(`ul[data-id="${t}"]`);
        if (d) {
          i.preventDefault();
          let c = h.querySelector(`ul[data-id="${o}"]`);
          c &&
            ((l.style.opacity = 0),
            setTimeout(function () {
              c.style.display = "none";
            }, 501)),
            (o = t),
            setTimeout(function () {
              (d.style.display = "flex"),
                setTimeout(function () {
                  l.style.opacity = 1;
                }, 10);
            }, 502);
        }
      });
    });
  }
  function L() {
    document.querySelectorAll(".slides-container").forEach(function (n) {
      let e = n.querySelectorAll(".slide"),
        l = n.querySelectorAll(".slide-button"),
        o = n.querySelector(".slides-container-images"),
        s = n.querySelector(".slides-container-images-2"),
        i = 0,
        t = 0,
        d = 0,
        c = 0;
      n.addEventListener("touchstart", function (a) {
        d = a.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (a) {
          (c = a.changedTouches[0].clientX),
            d - c > 50
              ? t < e.length - 1
                ? ((i = t),
                  t++,
                  m("next"),
                  n
                    .querySelectorAll(".slide-button.active")
                    .forEach(function (r) {
                      r.classList.remove("active");
                    }),
                  l[t].classList.add("active"))
                : ((i = t),
                  (t = 0),
                  m("next"),
                  n
                    .querySelectorAll(".slide-button.active")
                    .forEach(function (r) {
                      r.classList.remove("active");
                    }),
                  l[t].classList.add("active"))
              : d - c < -50 &&
                (t > 0
                  ? ((i = t),
                    t--,
                    m("prev"),
                    n
                      .querySelectorAll(".slide-button.active")
                      .forEach(function (r) {
                        r.classList.remove("active");
                      }),
                    l[t].classList.add("active"))
                  : ((i = t),
                    (t = e.length - 1),
                    m("prev"),
                    n
                      .querySelectorAll(".slide-button.active")
                      .forEach(function (r) {
                        r.classList.remove("active");
                      }),
                    l[t].classList.add("active")));
        }),
        l.forEach(function (a) {
          a.addEventListener("click", function () {
            t != a.dataset.index &&
              ((i = t),
              (t = parseInt(a.dataset.index)),
              n.querySelectorAll(".slide-button.active").forEach(function (r) {
                r.classList.remove("active");
              }),
              a.classList.add("active"),
              i < t ? m("next") : m("prev"));
          });
        });
      function m(a) {
        let r = s.querySelector("img").offsetWidth;
        if (a == "next") {
          let p = o.querySelector("img").offsetWidth;
          (o.style.transform = `translateX(-${p * t}px)`),
            setTimeout(function () {
              (e[i].style.transition = "all 0.4s ease-in-out"),
                (e[i].style.transform = "translateX(-100px)"),
                (e[i].style.opacity = 0),
                setTimeout(function () {
                  (e[t].style.transition = "none"),
                    (e[t].style.transform = "translateX(100px)");
                }, 500),
                setTimeout(function () {
                  (e[t].style.transition = "all 0.4s ease-in-out"),
                    (e[t].style.transform = "translateX(0)"),
                    (e[t].style.opacity = 1);
                }, 525);
            }, 200);
          let x = t;
          s.style.transform = `translateX(-${r * x}px`;
        } else {
          let p = o.querySelector("img").offsetWidth;
          (o.style.transform = `translateX(-${p * t}px)`),
            setTimeout(function () {
              (e[i].style.transition = "all 0.4s ease-in-out"),
                (e[i].style.transform = "translateX(100px)"),
                (e[i].style.opacity = 0),
                setTimeout(function () {
                  (e[t].style.transition = "none"),
                    (e[t].style.transform = "translateX(-100px)");
                }, 500),
                setTimeout(function () {
                  (e[t].style.transition = "all 0.4s ease-in-out"),
                    (e[t].style.transform = "translateX(0)"),
                    (e[t].style.opacity = 1);
                }, 525);
            }, 200);
          let x = t;
          s.style.transform = `translateX(-${r * x}px`;
        }
      }
    });
  }
  function g() {
    document.querySelectorAll(".animate-number").forEach(function (n) {
      if (n.innerText.match(/[a-z]/i)) return;
      (n.innerText = 0),
        new IntersectionObserver(
          function (l) {
            l.forEach(function (o) {
              if (o.isIntersecting) {
                if (o.target.dataset.done) return;
                let s = 0,
                  i = o.target.dataset.number,
                  t = !1;
                i.match(",") && ((i = i.replace(/,/g, "")), (t = !0));
                let d = Math.ceil(i / 88),
                  c = setInterval(function () {
                    (s += d),
                      s >= i &&
                        (clearInterval(c), (s = i), (n.dataset.done = !0)),
                      t
                        ? (o.target.innerText = s
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                        : (o.target.innerText = s);
                  }, 10);
              }
            });
          },
          { rootMargin: "0px 0px -30% 0px", threshold: 0.5 }
        ).observe(n);
    });
  }
  function q() {
    document.querySelectorAll(".testimonials-slider").forEach(function (n) {
      let e = n.querySelectorAll(".testimonials-item"),
        l = n.querySelectorAll(".slide-button");
      setInterval(function () {
        s < e.length - 1
          ? ((o = s),
            s++,
            d("next"),
            n.querySelectorAll(".slide-button.active").forEach(function (c) {
              c.classList.remove("active");
            }),
            l[s].classList.add("active"))
          : ((o = s),
            (s = 0),
            d("next"),
            n.querySelectorAll(".slide-button.active").forEach(function (c) {
              c.classList.remove("active");
            }),
            l[s].classList.add("active"));
      }, 7e3);
      let o = 0,
        s = 0,
        i = 0,
        t = 0;
      n.addEventListener("touchstart", function (c) {
        i = c.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (c) {
          (t = c.changedTouches[0].clientX),
            i - t > 50
              ? s < e.length - 1
                ? ((o = s),
                  s++,
                  d("next"),
                  n
                    .querySelectorAll(".slide-button.active")
                    .forEach(function (m) {
                      m.classList.remove("active");
                    }),
                  l[s].classList.add("active"))
                : ((o = s),
                  (s = 0),
                  d("next"),
                  n
                    .querySelectorAll(".slide-button.active")
                    .forEach(function (m) {
                      m.classList.remove("active");
                    }),
                  l[s].classList.add("active"))
              : i - t < -50 &&
                (s > 0
                  ? ((o = s),
                    s--,
                    d("prev"),
                    n
                      .querySelectorAll(".slide-button.active")
                      .forEach(function (m) {
                        m.classList.remove("active");
                      }),
                    l[s].classList.add("active"))
                  : ((o = s),
                    (s = e.length - 1),
                    d("prev"),
                    n
                      .querySelectorAll(".slide-button.active")
                      .forEach(function (m) {
                        m.classList.remove("active");
                      }),
                    l[s].classList.add("active")));
        }),
        l.forEach(function (c) {
          c.addEventListener("click", function () {
            s != c.dataset.index &&
              ((o = s),
              (s = parseInt(c.dataset.index)),
              n.querySelectorAll(".slide-button.active").forEach(function (m) {
                m.classList.remove("active");
              }),
              c.classList.add("active"),
              o < s ? d("next") : d("prev"));
          });
        });
      function d(c) {
        c == "next"
          ? ((e[o].style.opacity = 0),
            setTimeout(function () {
              e[s].style.opacity = 1;
            }, 525))
          : ((e[o].style.opacity = 0),
            setTimeout(function () {
              e[s].style.opacity = 1;
            }, 525));
      }
    });
  }
  function W() {
    document.querySelectorAll(".promises-slider").forEach(function (n) {
      let e = n.querySelectorAll(".promises-slider-item"),
        l = n.querySelector(".slider-progress .h-full"),
        o = n.querySelector(".promises-slider-next"),
        s = n.querySelector(".promises-slider-prev");
      r();
      let i = 0,
        t = 1;
      window.innerWidth >= 768 && (t = 2), window.innerWidth >= 1280 && (t = 3);
      let d = 0,
        c = 0;
      n.addEventListener("touchstart", function (p) {
        d = p.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (p) {
          (c = p.changedTouches[0].clientX),
            d - c > 50
              ? (i < e.length - t ? i++ : (i = 0), a())
              : d - c < -50 && (i > 0 ? i-- : (i = e.length - t), a());
        }),
        o.addEventListener("click", function () {
          (t = 1),
            window.innerWidth > 768 && (t = 2),
            window.innerWidth > 1280 && (t = 3),
            i < e.length - t ? i++ : (i = 0),
            a();
        }),
        s.addEventListener("click", function () {
          (t = 1),
            window.innerWidth > 768 && (t = 2),
            window.innerWidth > 1280 && (t = 3),
            i > 0 ? i-- : (i = e.length - t),
            a();
        });
      let m = window.innerWidth;
      window.addEventListener("resize", function () {
        m != window.innerWidth &&
          (r(),
          (t = 1),
          window.innerWidth >= 768 && (t = 2),
          window.innerWidth >= 1280 && (t = 3),
          (i = 0),
          a());
      });
      function a() {
        let p = e[0].offsetWidth;
        (p += 24),
          e.forEach(function (S, v) {
            (S.style.transform = `translateX(-${p * i}px)`),
              (v = S.dataset.index),
              S.classList.remove("promise-" + v);
          }),
          e[i].classList.add("promise-0"),
          (e[i].dataset.index = 0),
          i + 1 < e.length &&
            (e[i + 1].classList.add("promise-1"), (e[i + 1].dataset.index = 1)),
          i + 2 < e.length &&
            (e[i + 2].classList.add("promise-2"), (e[i + 2].dataset.index = 2));
        let x = l.offsetWidth;
        l.style.transform = `translateX(${i * x}px)`;
      }
      function r() {
        setTimeout(function () {
          if (window.innerWidth >= 768) {
            let p = 0;
            e.forEach(function (S) {
              S.offsetHeight > p && (p = S.offsetHeight);
            }),
              e.forEach(function (S) {
                S.style.height = p + "px";
              });
            let x = n.querySelector(".promises-slider-container").offsetHeight;
            n.querySelector(".promises-slider-container").style.height =
              x + "px";
          } else
            e.forEach(function (p) {
              p.style.height = "auto";
            }),
              (n.querySelector(".promises-slider-container").style.height =
                "auto");
        }, 500),
          window.innerWidth >= 768 &&
            (e.length > 2
              ? ((o.style.display = "flex"), (s.style.display = "flex"))
              : ((o.style.display = "none"), (s.style.display = "none"))),
          window.innerWidth >= 1280 &&
            (e.length > 3
              ? ((o.style.display = "flex"), (s.style.display = "flex"))
              : ((o.style.display = "none"), (s.style.display = "none")));
      }
    });
  }
  function X() {
    document.querySelectorAll(".number-slider").forEach(function (n) {
      let e = n.querySelectorAll(".flex-shrink-0"),
        l = n.querySelector(".slider-progress .h-full"),
        o = 0,
        s = 0,
        i = 0;
      n.addEventListener("touchstart", function (c) {
        s = c.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (c) {
          (i = c.changedTouches[0].clientX),
            s - i > 50
              ? (o < e.length - 1 ? o++ : (o = 0), d())
              : s - i < -50 && (o > 0 ? o-- : (o = e.length - 1), d());
        });
      let t = window.innerWidth;
      window.addEventListener("resize", function () {
        t != window.innerWidth && ((o = 0), d());
      });
      function d() {
        if (window.innerWidth >= 1024) return;
        let c = e[0].offsetWidth + 24;
        e.forEach(function (a, r) {
          a.style.transform = `translateX(-${c * o}px)`;
        });
        let m = l.offsetWidth;
        l.style.transform = `translateX(${o * m}px)`;
      }
    });
  }
  function b() {
    document.querySelectorAll(".team-slider").forEach(function (n) {
      let e = n.querySelector(".team-slider-images-container"),
        l = !1,
        o = n.querySelectorAll(".team-member-image").length,
        s = -1,
        i = n.querySelectorAll(".team-member-image").length;
      n.querySelectorAll(".team-member-image").forEach(function (u, f) {
        let y = u.cloneNode(!0);
        (y.dataset.index = o), (y.dataset.originalindex = o), e.appendChild(y);
        let w = u.cloneNode(!0);
        (w.dataset.index = s),
          (w.dataset.originalindex = s),
          e.prepend(w),
          o++,
          s--;
      });
      let t = n.querySelectorAll(".team-member-image"),
        d = n.querySelectorAll(".team-member-info"),
        c = n.querySelector(".team-slider-next"),
        m = n.querySelector(".team-slider-prev");
      (e.style.transition = "none"),
        t.forEach(function (u, f) {
          u.style.transition = "none";
        });
      let a = t.length / 3,
        r = 0;
      window.innerWidth >= 768 && (r = 1),
        window.innerWidth >= 1280 && (r = 2),
        v("init");
      let p = window.innerWidth;
      window.addEventListener("resize", function () {
        p != window.innerWidth &&
          ((e.style.transition = "none"),
          t.forEach(function (u, f) {
            u.style.transition = "none";
          }),
          (a = t.length / 3),
          (r = 0),
          window.innerWidth >= 768 && (r = 1),
          window.innerWidth >= 1280 && (r = 2),
          t.forEach(function (u) {
            u.dataset.index = u.dataset.originalindex;
          }),
          this.setTimeout(function () {
            v("init");
          }, 10));
      }),
        c.addEventListener("click", function () {
          l ||
            (a < (t.length / 3) * 2 - 1
              ? (a++,
                r < i - 1 ? r++ : (r = 0),
                t.forEach(function (u) {
                  let f = u.dataset.index;
                  u.dataset.index = parseInt(f) - 1;
                }),
                v())
              : (a++,
                t.forEach(function (u) {
                  let f = u.dataset.index;
                  u.dataset.index = parseInt(f) - 1;
                }),
                r < i - 1 ? r++ : (r = 0),
                (l = !0),
                v("resetnext")));
        });
      let x = 0,
        S = 0;
      n.addEventListener("touchstart", function (u) {
        x = u.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (u) {
          (S = u.changedTouches[0].clientX),
            x - S > 50
              ? a < (t.length / 3) * 2 - 1
                ? (a++,
                  r < i - 1 ? r++ : (r = 0),
                  t.forEach(function (f) {
                    let y = f.dataset.index;
                    f.dataset.index = parseInt(y) - 1;
                  }),
                  v())
                : (a++,
                  t.forEach(function (f) {
                    let y = f.dataset.index;
                    f.dataset.index = parseInt(y) - 1;
                  }),
                  r < i - 1 ? r++ : (r = 0),
                  (l = !0),
                  v("resetnext"))
              : x - S < -50 &&
                (a > t.length / 3
                  ? (a--,
                    r > 0 ? r-- : (r = i - 1),
                    t.forEach(function (f) {
                      let y = f.dataset.index;
                      f.dataset.index = parseInt(y) + 1;
                    }))
                  : (a--,
                    t.forEach(function (f) {
                      let y = f.dataset.index;
                      f.dataset.index = parseInt(y) + 1;
                    }),
                    r > 0 ? r-- : (r = i - 1),
                    (l = !0),
                    v("resetprev")),
                v());
        }),
        m.addEventListener("click", function () {
          l ||
            (a > t.length / 3
              ? (a--,
                r > 0 ? r-- : (r = i - 1),
                t.forEach(function (u) {
                  let f = u.dataset.index;
                  u.dataset.index = parseInt(f) + 1;
                }))
              : (a--,
                t.forEach(function (u) {
                  let f = u.dataset.index;
                  u.dataset.index = parseInt(f) + 1;
                }),
                r > 0 ? r-- : (r = i - 1),
                (l = !0),
                v("resetprev")),
            v());
        });
      function v(u = "") {
        u != "init" &&
          ((e.style.transition = ""),
          t.forEach(function (y) {
            y.style.transition = "";
          }));
        let f = t[0].offsetWidth + 20;
        window.innerWidth >= 1024 && (f = t[0].offsetWidth + 24),
          (e.style.transform = `translateX(-${f * a}px)`),
          d.forEach(function (y) {
            y.classList.add("opacity-0"), y.classList.remove("z-10");
          }),
          setTimeout(function () {
            d[r].classList.remove("opacity-0"), d[r].classList.add("z-10");
          }, 305),
          u == "resetnext" &&
            setTimeout(function () {
              (e.style.transition = "none"),
                t.forEach(function (y, w) {
                  y.style.transition = "none";
                }),
                (e.style.transform = `translateX(-${f * (t.length / 3)}px`),
                (a = t.length / 3),
                t.forEach(function (y) {
                  y.dataset.index = y.dataset.originalindex;
                }),
                (l = !1);
            }, 700),
          u == "resetprev" &&
            setTimeout(function () {
              (e.style.transition = "none"),
                t.forEach(function (y, w) {
                  y.style.transition = "none";
                }),
                (e.style.transform = `translateX(-${
                  f * ((t.length / 3) * 2 - 1)
                }px`),
                (a = (t.length / 3) * 2 - 1),
                t.forEach(function (y) {
                  y.dataset.index = y.dataset.originalindex - t.length / 3 + 1;
                }),
                (l = !1);
            }, 700);
      }
    });
  }
  function A() {
    document.querySelectorAll(".sticky-posts").forEach(function (n) {
      let e = n.querySelectorAll("article"),
        l = n.querySelector(".sticky-posts-progress .h-full"),
        o = 0,
        s = 0,
        i = 0;
      n.addEventListener("touchstart", function (c) {
        s = c.touches[0].clientX;
      }),
        n.addEventListener("touchend", function (c) {
          (i = c.changedTouches[0].clientX),
            s - i > 50
              ? (o < e.length - 1 ? o++ : (o = 0), d())
              : s - i < -50 && (o > 0 ? o-- : (o = e.length - 1), d());
        });
      let t = window.innerWidth;
      window.addEventListener("resize", function () {
        t != window.innerWidth && ((o = 0), d());
      });
      function d() {
        if (window.innerWidth >= 1024) {
          o = 0;
          return;
        }
        let c = e[0].offsetWidth;
        e.forEach(function (a, r) {
          (a.style.transform = `translateX(-${c * o}px)`),
            r == o
              ? setTimeout(function () {
                  a.querySelector(".flex-1").classList.add("opacity-100"),
                    a.querySelector(".flex-1").classList.remove("opacity-0");
                }, 150)
              : (a.querySelector(".flex-1").classList.add("opacity-0"),
                a.querySelector(".flex-1").classList.remove("opacity-100"));
        });
        let m = l.offsetWidth;
        l.style.transform = `translateX(${o * m}px)`;
      }
    });
  }
})();
