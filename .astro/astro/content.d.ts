declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"2026-07-10__best-tools-for-affiliate-marketers-in-2026-a-practical-developer-stack.md": {
	id: "2026-07-10__best-tools-for-affiliate-marketers-in-2026-a-practical-developer-stack.md";
  slug: "2026-07-10__best-tools-for-affiliate-marketers-in-2026-a-practical-developer-stack";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-ai-coding-assistants-2026.md": {
	id: "best-ai-coding-assistants-2026.md";
  slug: "best-ai-coding-assistants-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-crypto-hardware-wallets-2026.md": {
	id: "best-crypto-hardware-wallets-2026.md";
  slug: "best-crypto-hardware-wallets-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-hosting-for-developers-2026.md": {
	id: "best-hosting-for-developers-2026.md";
  slug: "best-hosting-for-developers-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-password-managers-developers-2026.md": {
	id: "best-password-managers-developers-2026.md";
  slug: "best-password-managers-developers-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"best-vpns-for-developers-2026.md": {
	id: "best-vpns-for-developers-2026.md";
  slug: "best-vpns-for-developers-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"changenow-review-2026.md": {
	id: "changenow-review-2026.md";
  slug: "changenow-review-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"changenow-vs-simpleswap-2026.md": {
	id: "changenow-vs-simpleswap-2026.md";
  slug: "changenow-vs-simpleswap-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cloudpanel-review-2026.md": {
	id: "cloudpanel-review-2026.md";
  slug: "cloudpanel-review-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cloudpanel-vs-cpanel-2026.md": {
	id: "cloudpanel-vs-cpanel-2026.md";
  slug: "cloudpanel-vs-cpanel-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"deploy-app-digitalocean-2026.md": {
	id: "deploy-app-digitalocean-2026.md";
  slug: "deploy-app-digitalocean-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"digitalocean-vs-aws-vs-vercel-2026.md": {
	id: "digitalocean-vs-aws-vs-vercel-2026.md";
  slug: "digitalocean-vs-aws-vs-vercel-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how to Use Semrush for Affiliate Websites in 2026.md": {
	id: "how to Use Semrush for Affiliate Websites in 2026.md";
  slug: "how-to-use-semrush-for-affiliate-websites-in-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-to-secure-your-crypto-2026.md": {
	id: "how-to-secure-your-crypto-2026.md";
  slug: "how-to-secure-your-crypto-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-to-swap-crypto-without-kyc-2026.md": {
	id: "how-to-swap-crypto-without-kyc-2026.md";
  slug: "how-to-swap-crypto-without-kyc-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ledger-nano-s-plus-vs-nano-x-2026.md": {
	id: "ledger-nano-s-plus-vs-nano-x-2026.md";
  slug: "ledger-nano-s-plus-vs-nano-x-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ledger-review-2026.md": {
	id: "ledger-review-2026.md";
  slug: "ledger-review-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ledger-setup-guide-2026.md": {
	id: "ledger-setup-guide-2026.md";
  slug: "ledger-setup-guide-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"make-com-review-2026.md": {
	id: "make-com-review-2026.md";
  slug: "make-com-review-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"make-vs-n8n-automation-2026.md": {
	id: "make-vs-n8n-automation-2026.md";
  slug: "make-vs-n8n-automation-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"make-vs-zapier-2026.md": {
	id: "make-vs-zapier-2026.md";
  slug: "make-vs-zapier-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nordvpn-dev-server-setup-2026.md": {
	id: "nordvpn-dev-server-setup-2026.md";
  slug: "nordvpn-dev-server-setup-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nordvpn-vs-surfshark-2026.md": {
	id: "nordvpn-vs-surfshark-2026.md";
  slug: "nordvpn-vs-surfshark-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"semrush Alternatives for Indie Hackers in 2026.md": {
	id: "semrush Alternatives for Indie Hackers in 2026.md";
  slug: "semrush-alternatives-for-indie-hackers-in-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"semrush Review 2026.md": {
	id: "semrush Review 2026.md";
  slug: "semrush-review-2026";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"semrush vs Ahrefs 2026: Which SEO Tool Is Better for Developers.md": {
	id: "semrush vs Ahrefs 2026: Which SEO Tool Is Better for Developers.md";
  slug: "semrush-vs-ahrefs-2026-which-seo-tool-is-better-for-developers";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
