import './OldWork.svelte.css';
/* src/components/OldWork.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div1;

	return {
		c() {
			div1 = element("div");
			div1.innerHTML = `<div class="transform skew-x-12 rotate-3 bg-royalblue-800 rounded-2xl shadow-2xl"><svg class="neon svelte-1thotyn" xmlns="http://www.w3.org/2000/svg" width="490.0075317382812px" height="124.4224853515625px" viewBox="4.996234130859392 12.78875732421875 490.0075317382812 124.4224853515625" preserveAspectRatio="xMidYMid"><defs><linearGradient id="editing-outline-gradient" x1="-0.41354545764260087" x2="1.4135454576426008" y1="0.09326335692419985" y2="0.9067366430758002"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#266082"></stop></linearGradient><filter id="editing-outline" x="-100%" y="-100%" width="300%" height="300%"><feMorphology in="SourceGraphic" operator="dilate" radius="1" result="outline"></feMorphology><feComposite operator="out" in="outline" in2="SourceAlpha"></feComposite></filter></defs><g xmlns="http://www.w3.org/2000/svg" filter="url(#editing-outline)"><g transform="translate(71.98501300811768, 105.07999992370605)"><path d="M33.92 0L33.92-20.22L11.33-20.22L11.33 0L5.95 0L5.95-44.67L11.33-44.67L11.33-24.96L33.92-24.96L33.92-44.67L39.30-44.67L39.30 0L33.92 0ZM63.17 0.77L63.17 0.77L63.17 0.77Q59.84 0.77 57.09-0.45L57.09-0.45L57.09-0.45Q54.34-1.66 52.38-3.94L52.38-3.94L52.38-3.94Q50.43-6.21 49.34-9.38L49.34-9.38L49.34-9.38Q48.26-12.54 48.26-16.51L48.26-16.51L48.26-16.51Q48.26-20.42 49.34-23.62L49.34-23.62L49.34-23.62Q50.43-26.82 52.38-29.09L52.38-29.09L52.38-29.09Q54.34-31.36 57.09-32.58L57.09-32.58L57.09-32.58Q59.84-33.79 63.17-33.79L63.17-33.79L63.17-33.79Q66.50-33.79 69.22-32.58L69.22-32.58L69.22-32.58Q71.94-31.36 73.92-29.09L73.92-29.09L73.92-29.09Q75.90-26.82 76.99-23.62L76.99-23.62L76.99-23.62Q78.08-20.42 78.08-16.51L78.08-16.51L78.08-16.51Q78.08-12.54 76.99-9.38L76.99-9.38L76.99-9.38Q75.90-6.21 73.92-3.94L73.92-3.94L73.92-3.94Q71.94-1.66 69.22-0.45L69.22-0.45L69.22-0.45Q66.50 0.77 63.17 0.77ZM63.17-3.78L63.17-3.78L63.17-3.78Q67.33-3.78 69.95-6.34L69.95-6.34L69.95-6.34Q72.58-8.90 72.58-14.14L72.58-14.14L72.58-18.88L72.58-18.88Q72.58-24.13 69.95-26.69L69.95-26.69L69.95-26.69Q67.33-29.25 63.17-29.25L63.17-29.25L63.17-29.25Q59.01-29.25 56.38-26.69L56.38-26.69L56.38-26.69Q53.76-24.13 53.76-18.88L53.76-18.88L53.76-14.14L53.76-14.14Q53.76-8.90 56.38-6.34L56.38-6.34L56.38-6.34Q59.01-3.78 63.17-3.78ZM86.53 0L86.53-47.36L91.65-47.36L91.65-27.65L91.90-27.65L91.90-27.65Q93.18-30.78 95.65-32.29L95.65-32.29L95.65-32.29Q98.11-33.79 101.57-33.79L101.57-33.79L101.57-33.79Q104.64-33.79 107.14-32.58L107.14-32.58L107.14-32.58Q109.63-31.36 111.39-29.12L111.39-29.12L111.39-29.12Q113.15-26.88 114.08-23.68L114.08-23.68L114.08-23.68Q115.01-20.48 115.01-16.51L115.01-16.51L115.01-16.51Q115.01-12.54 114.08-9.34L114.08-9.34L114.08-9.34Q113.15-6.14 111.39-3.90L111.39-3.90L111.39-3.90Q109.63-1.66 107.14-0.45L107.14-0.45L107.14-0.45Q104.64 0.77 101.57 0.77L101.57 0.77L101.57 0.77Q94.85 0.77 91.90-5.38L91.90-5.38L91.65-5.38L91.65 0L86.53 0ZM100.16-3.84L100.16-3.84L100.16-3.84Q104.51-3.84 107.01-6.56L107.01-6.56L107.01-6.56Q109.50-9.28 109.50-13.70L109.50-13.70L109.50-19.33L109.50-19.33Q109.50-23.74 107.01-26.46L107.01-26.46L107.01-26.46Q104.51-29.18 100.16-29.18L100.16-29.18L100.16-29.18Q98.43-29.18 96.86-28.70L96.86-28.70L96.86-28.70Q95.30-28.22 94.14-27.39L94.14-27.39L94.14-27.39Q92.99-26.56 92.32-25.38L92.32-25.38L92.32-25.38Q91.65-24.19 91.65-22.85L91.65-22.85L91.65-10.56L91.65-10.56Q91.65-8.96 92.32-7.71L92.32-7.71L92.32-7.71Q92.99-6.46 94.14-5.60L94.14-5.60L94.14-5.60Q95.30-4.74 96.86-4.29L96.86-4.29L96.86-4.29Q98.43-3.84 100.16-3.84ZM123.65 0L123.65-47.36L128.77-47.36L128.77-27.65L129.02-27.65L129.02-27.65Q130.30-30.78 132.77-32.29L132.77-32.29L132.77-32.29Q135.23-33.79 138.69-33.79L138.69-33.79L138.69-33.79Q141.76-33.79 144.26-32.58L144.26-32.58L144.26-32.58Q146.75-31.36 148.51-29.12L148.51-29.12L148.51-29.12Q150.27-26.88 151.20-23.68L151.20-23.68L151.20-23.68Q152.13-20.48 152.13-16.51L152.13-16.51L152.13-16.51Q152.13-12.54 151.20-9.34L151.20-9.34L151.20-9.34Q150.27-6.14 148.51-3.90L148.51-3.90L148.51-3.90Q146.75-1.66 144.26-0.45L144.26-0.45L144.26-0.45Q141.76 0.77 138.69 0.77L138.69 0.77L138.69 0.77Q131.97 0.77 129.02-5.38L129.02-5.38L128.77-5.38L128.77 0L123.65 0ZM137.28-3.84L137.28-3.84L137.28-3.84Q141.63-3.84 144.13-6.56L144.13-6.56L144.13-6.56Q146.62-9.28 146.62-13.70L146.62-13.70L146.62-19.33L146.62-19.33Q146.62-23.74 144.13-26.46L144.13-26.46L144.13-26.46Q141.63-29.18 137.28-29.18L137.28-29.18L137.28-29.18Q135.55-29.18 133.98-28.70L133.98-28.70L133.98-28.70Q132.42-28.22 131.26-27.39L131.26-27.39L131.26-27.39Q130.11-26.56 129.44-25.38L129.44-25.38L129.44-25.38Q128.77-24.19 128.77-22.85L128.77-22.85L128.77-10.56L128.77-10.56Q128.77-8.96 129.44-7.71L129.44-7.71L129.44-7.71Q130.11-6.46 131.26-5.60L131.26-5.60L131.26-5.60Q132.42-4.74 133.98-4.29L133.98-4.29L133.98-4.29Q135.55-3.84 137.28-3.84ZM172.80-10.56L180.80-33.02L185.86-33.02L171.07 7.68L171.07 7.68Q170.50 9.15 169.92 10.14L169.92 10.14L169.92 10.14Q169.34 11.14 168.51 11.71L168.51 11.71L168.51 11.71Q167.68 12.29 166.43 12.54L166.43 12.54L166.43 12.54Q165.18 12.80 163.39 12.80L163.39 12.80L160.77 12.80L160.77 8.32L165.95 8.32L168.45 1.28L156.10-33.02L161.22-33.02L169.15-10.56L170.69-5.18L171.01-5.18L172.80-10.56ZM220.16 0L214.21 0L203.33-44.67L209.02-44.67L213.82-23.17L217.54-6.46L217.66-6.46L221.82-23.17L227.46-44.67L233.60-44.67L239.04-23.17L243.20-6.53L243.39-6.53L247.23-23.17L252.29-44.67L257.79-44.67L246.34 0L240.38 0L234.56-22.27L230.46-38.66L230.34-38.66L226.11-22.27L220.16 0ZM276.03 0.77L276.03 0.77L276.03 0.77Q272.70 0.77 269.95-0.45L269.95-0.45L269.95-0.45Q267.20-1.66 265.25-3.94L265.25-3.94L265.25-3.94Q263.30-6.21 262.21-9.38L262.21-9.38L262.21-9.38Q261.12-12.54 261.12-16.51L261.12-16.51L261.12-16.51Q261.12-20.42 262.21-23.62L262.21-23.62L262.21-23.62Q263.30-26.82 265.25-29.09L265.25-29.09L265.25-29.09Q267.20-31.36 269.95-32.58L269.95-32.58L269.95-32.58Q272.70-33.79 276.03-33.79L276.03-33.79L276.03-33.79Q279.36-33.79 282.08-32.58L282.08-32.58L282.08-32.58Q284.80-31.36 286.78-29.09L286.78-29.09L286.78-29.09Q288.77-26.82 289.86-23.62L289.86-23.62L289.86-23.62Q290.94-20.42 290.94-16.51L290.94-16.51L290.94-16.51Q290.94-12.54 289.86-9.38L289.86-9.38L289.86-9.38Q288.77-6.21 286.78-3.94L286.78-3.94L286.78-3.94Q284.80-1.66 282.08-0.45L282.08-0.45L282.08-0.45Q279.36 0.77 276.03 0.77ZM276.03-3.78L276.03-3.78L276.03-3.78Q280.19-3.78 282.82-6.34L282.82-6.34L282.82-6.34Q285.44-8.90 285.44-14.14L285.44-14.14L285.44-18.88L285.44-18.88Q285.44-24.13 282.82-26.69L282.82-26.69L282.82-26.69Q280.19-29.25 276.03-29.25L276.03-29.25L276.03-29.25Q271.87-29.25 269.25-26.69L269.25-26.69L269.25-26.69Q266.62-24.13 266.62-18.88L266.62-18.88L266.62-14.14L266.62-14.14Q266.62-8.90 269.25-6.34L269.25-6.34L269.25-6.34Q271.87-3.78 276.03-3.78ZM304.51 0L299.39 0L299.39-33.02L304.51-33.02L304.51-26.94L304.83-26.94L304.83-26.94Q305.73-29.31 308.03-31.17L308.03-31.17L308.03-31.17Q310.34-33.02 314.37-33.02L314.37-33.02L316.35-33.02L316.35-27.90L313.34-27.90L313.34-27.90Q309.18-27.90 306.85-26.34L306.85-26.34L306.85-26.34Q304.51-24.77 304.51-22.40L304.51-22.40L304.51 0ZM322.88 0L322.88-47.36L328-47.36L328-17.34L328.26-17.34L333.31-22.98L342.66-33.02L348.86-33.02L336.64-19.97L350.08 0L343.87 0L332.93-16.83L328-11.78L328 0L322.88 0Z" fill="url(#editing-outline-gradient)"></path></g></g></svg></div>`;
			attr(div1, "class", "absolute z-10");
			set_style(div1, "width", "500px");
			set_style(div1, "top", "-15rem");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

class OldWork extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default OldWork;