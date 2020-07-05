!(function (e) {
  var t,
    n,
    a,
    o,
    c,
    i,
    d,
    l =
      '<svg><symbol id="icon-px-zujiandingyueea" viewBox="0 0 1024 1024"><path d="M928 256h-160V96a32 32 0 0 0-64 0v160h-160a32 32 0 0 0 0 64h160v160a32 32 0 0 0 64 0v-160h160a32 32 0 0 0 0-64z m-64 320h-192a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-192a96 96 0 0 0-96-96z m32 272a48 48 0 0 1-48 48h-160a48 48 0 0 1-48-48v-160a48 48 0 0 1 48-48h160a48 48 0 0 1 48 48v160zM352 64H160a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96V160a96 96 0 0 0-96-96z m32 272a48 48 0 0 1-48 48h-160A48 48 0 0 1 128 336v-160A48 48 0 0 1 176 128h160A48 48 0 0 1 384 176v160zM352 576H160a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-192a96 96 0 0 0-96-96z m32 272a48 48 0 0 1-48 48h-160A48 48 0 0 1 128 848v-160A48 48 0 0 1 176 640h160a48 48 0 0 1 48 48v160z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M751.4 810.7c-16.3 0-29.5-13.2-29.5-29.5s13.2-29.5 29.5-29.5h8.4c101 0 167.6-112.1 167.6-212.7 0-110.5-96.2-199.5-205.8-201.8l-21.3-0.5-6.3-20.3c-30.5-98.5-96.3-156.3-213.6-156.3-146.3 0-240.9 108.4-240.9 252.2l0.2 0.3 2.4 27.1-26.8 4.6C150 455.5 98 522.5 98 596.7c0 84 65.1 154.9 141 154.9h26.2c16.3 0 29.5 13.2 29.5 29.5s-13.2 29.5-29.5 29.5H239c-107.9 0-199.1-98-199.1-214 0-94.7 59.2-178.4 141.2-204.6 10.2-164.8 129.2-291 299.3-291 133.6 0 222.1 69.2 263.3 178.4C877.2 293.9 984 402.8 984 539c0 126.8-85.1 267.8-232.6 271.7z"  ></path><path d="M511.6 859.5L606.3 755c8.2-8.6 21.6-8.6 29.8 0l7.4 5.9c8.2 8.6 8.2 18.9 0 27.5L534.4 908.1c-0.1 0.2-0.2 0.3-0.3 0.5l-7.5 7.8c-4.1 4.3-9.5 6.5-15 6.4-5.4 0-10.9-2.1-15-6.4l-7.5-7.8c-0.1-0.1-0.2-0.3-0.3-0.5L382.3 790.3c-8.3-8.6-8.3-22.6 0-31.2l7.4-4.1c8.2-8.6 21.6-6.8 29.9 1.8l92 102.7z"  ></path><path d="M511.9 500c16.3 0 29.5 13.2 29.5 29.5v324.7c0 16.3-13.2 29.5-29.5 29.5s-29.5-13.2-29.5-29.5V529.5c0-16.3 13.2-29.5 29.5-29.5z"  ></path></symbol></svg>',
    s = (t = document.getElementsByTagName('script'))[t.length - 1].getAttribute('data-injectcss');
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function h() {
    i || ((i = !0), o());
  }
  (n = function () {
    var e,
      t,
      n,
      a,
      o,
      c = document.createElement('div');
    (c.innerHTML = l),
      (l = null),
      (e = c.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (n = document.body).firstChild
          ? ((a = t), (o = n.firstChild).parentNode.insertBefore(a, o))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((a = function () {
            document.removeEventListener('DOMContentLoaded', a, !1), n();
          }),
          document.addEventListener('DOMContentLoaded', a, !1))
      : document.attachEvent &&
        ((o = n),
        (c = e.document),
        (i = !1),
        (d = function () {
          try {
            c.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          h();
        })(),
        (c.onreadystatechange = function () {
          'complete' == c.readyState && ((c.onreadystatechange = null), h());
        }));
})(window);
