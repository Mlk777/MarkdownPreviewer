const style = 'style="margin:0 !important"';

const rules = [
  [/#{6}(.*)\n/g, `<h6 ${style}>$1</h6>`],
  [/#{5}(.*)\n/g, `<h5 ${style}>$1</h5>`],
  [/#{4}(.*)\n/g, `<h4 ${style}>$1</h4>`],
  [/#{3}(.*)\n/g, `<h3 ${style}>$1</h3>`],
  [/#{2}(.*)\n/g, `<h2 ${style}>$1</h2>`],
  [/#{1}(.*)\n/g, `<h1 ${style}>$1</h1>`],
  [/(\*\*|__)(.*?)\1\n/g, `<b  ${style}>$2</b>`],
  [/(\*|_)(.*?)\1\n/g, `<em ${style}>$2</em>`],
  [/((\d\..+)+)\n/g, `<ol ${style}>$1</ol>`],
  [/((\n\*.+)+)/g, `<ul ${style}>$1</ul>`],
  [/\n\d\.([^\n]+)/g, `<li ${style}>$1</li>`],
  [/\n\*([^\n]+)/g, `<li ${style}>$1</li>`],
  // [/^`{3}.*\n(.+)\n`{3}\n$/gm, `<pre ${style}><code>$1</code></pre>`],
  [/```([a-z]*\n+[\s\S]*?\n)```/g, `<pre><code>$1</code></pre>`], //Bug
  [/`(.*?)`/g, "<code>$1</code>"],
  [/(&gt;|>)(.*)/g, `<blockquote ${style}>$2</blockquote>`],
  [
    (/!\[([^\])+)\](([^)]+)s"([^")]+)"\)/g,
    `<img src="$2" alt="$1" title="$3" ${style} />`)
  ],
  [/\[([^\]]+)\]\(([^)]+)\)/g, `<a ${style} href="$2">$1</a>`],
  [/([^\n]+\n)/g, `<p ${style}>$1</p>`]
];

export default {
  bind(el) {
    let content = el.textContent;
    rules.forEach(([rule, template]) => {
      content = content.replace(rule, template);
    });
    el.innerHTML = content;
  }
};
