export interface Article {
	slug: string;
	url: string;
	title: string;
	description: string;
	tags: string[];
	createdAt: string;
	readingMinutes: number;
	buildsOn?: string;
}

const rawModules = import.meta.glob('../pages/article/*.mdx', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

function estimateReadingMinutes(raw: string): number {
	const text = raw
		.replace(/^---[\s\S]*?---/, '')
		.replace(/^import .*/gm, '')
		.replace(/<LineChart[\s\S]*?\/>/g, '')
		.replace(/<PlantUML[\s\S]*?\/>/g, '')
		.replace(/<img[\s\S]*?\/>/g, '')
		.replace(/```[\s\S]*?```/g, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/[#*_>`]/g, '');

	const words = text.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 200));
}

function frontmatterField(raw: string, key: string): string | undefined {
	const block = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
	const value = block.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1]?.trim();
	if (!value) return undefined;
	return value.replace(/^(["'])(.*)\1$/, '$2');
}

function frontmatterList(raw: string, key: string): string[] {
	const value = frontmatterField(raw, key);
	if (!value) return [];
	return value
		.replace(/^\[|\]$/g, '')
		.split(',')
		.map((item) => item.trim().replace(/^(["'])(.*)\1$/, '$2'))
		.filter(Boolean);
}

/** All articles, newest first. Reads raw source so layouts can call it without an import cycle. */
export function getArticles(): Article[] {
	return Object.entries(rawModules)
		.map(([path, raw]) => {
			const slug = path.split('/').pop()!.replace(/\.mdx$/, '');
			return {
				slug,
				url: `/article/${slug}`,
				title: frontmatterField(raw, 'title') ?? slug,
				description: frontmatterField(raw, 'description') ?? '',
				tags: frontmatterList(raw, 'tags'),
				createdAt: frontmatterField(raw, 'createdAt') ?? '',
				readingMinutes: estimateReadingMinutes(raw),
				buildsOn: frontmatterField(raw, 'buildsOn'),
			};
		})
		.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Formats an ISO date as "4 Dec 2024", or "4 Dec" without the year. */
export function formatDate(iso: string, withYear = true): string {
	return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		...(withYear ? { year: 'numeric' } : {}),
		timeZone: 'UTC',
	});
}
