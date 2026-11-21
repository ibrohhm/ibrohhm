export type Category = 'AI' | 'Back end' | 'Front end';

export interface Project {
	name: string;
	url: string;
	description: string;
	category: Category;
	featured?: boolean;
	article?: string;
}

export const categories: Category[] = ['AI', 'Back end', 'Front end'];

export const projects: Project[] = [
	{ name: 'agent-team', url: 'https://github.com/ibrohhm/agent-team', description: 'Multi-agent team collaboration', category: 'AI', featured: true, article: 'building-an-autonomous-agent-team' },
	{ name: 'jira-implementer', url: 'https://github.com/ibrohhm/jira-implementer', description: 'AI agent that implements Jira tickets', category: 'AI' },
	{ name: 'telegram-claude-bot', url: 'https://github.com/ibrohhm/telegram-claude-bot', description: 'Telegram bot powered by Claude AI', category: 'AI' },
	{ name: 'tickboard-mcp', url: 'https://github.com/ibrohhm/tickboard-mcp', description: 'MCP server for nested checklists with a React UI', category: 'AI', featured: true },
	{ name: 'clean-architecture', url: 'https://github.com/ibrohhm/clean-architecture', description: 'Implement Clean Architecture using Go', category: 'Back end' },
	{ name: 'kafka-conductor-golang', url: 'https://github.com/ibrohhm/kafka-conductor-golang', description: 'Kafka consumer orchestration in Go', category: 'Back end', featured: true },
	{ name: 'prometheus-grafana-golang', url: 'https://github.com/ibrohhm/prometheus-grafana-golang', description: 'Prometheus and Grafana monitoring setup with Go', category: 'Back end', featured: true },
	{ name: 'crash-and-timeout-simulation', url: 'https://github.com/ibrohhm/crash_and_timeout_simulation', description: 'A client, server and slow partner in Go, to watch a service fall over', category: 'Back end', featured: true, article: 'crash-and-timeout-simulation' },
	{ name: 'toggle-feature', url: 'https://github.com/ibrohhm/toggle-feature', description: 'Feature flag toggle implementation in Go', category: 'Back end' },
	{ name: 'jwt-ruby', url: 'https://github.com/ibrohhm/jwt-ruby', description: 'JWT token-based auth with Ruby on Rails', category: 'Back end' },
	{ name: 'golang-gin', url: 'https://github.com/ibrohhm/golang-gin', description: 'REST API boilerplate with Go and Gin', category: 'Back end' },
	{ name: 'response', url: 'https://github.com/ibrohhm/response', description: 'Go HTTP response wrapper', category: 'Back end' },
	{ name: 'prime-factors', url: 'https://github.com/ibrohhm/prime-factors', description: 'Benchmark checking prime factors with/without goroutines', category: 'Back end' },
	{ name: 'sudoku-solver', url: 'https://github.com/ibrohhm/sudoku-solver', description: 'Sudoku solver using backtracking', category: 'Back end' },
	{ name: 'go-mongodb', url: 'https://github.com/ibrohhm/go-mongodb', description: 'Simple CRUD using Go and MongoDB', category: 'Back end' },
	{ name: 'learn-sinatra-crud-api', url: 'https://github.com/ibrohhm/learn-sinatra-crud-api', description: 'Simple CRUD using Sinatra Ruby', category: 'Back end' },
	{ name: 'workflow-ui', url: 'https://github.com/ibrohhm/workflow-ui', description: 'Interactive flowchart canvas built with React Flow and Next.js', category: 'Front end', featured: true },
	{ name: 'intranet-ui', url: 'https://github.com/ibrohhm/intranet-ui', description: 'Intranet dashboard UI', category: 'Front end' },
	{ name: 'multi-window', url: 'https://github.com/ibrohhm/multi-window', description: 'Multi-window browser interaction', category: 'Front end' },
	{ name: 'mimic-github', url: 'https://github.com/ibrohhm/mimic-github', description: 'GitHub UI clone', category: 'Front end' },
	{ name: 'calendar-challenge', url: 'https://github.com/ibrohhm/calendar-challenge', description: 'Calendar UI challenge', category: 'Front end' },
	{ name: 'Snake Game', url: 'https://codepen.io/colorcreate/details/WNQbrar', description: 'Snake game', category: 'Front end' },
	{ name: 'webpack-vue-buefy', url: 'https://github.com/ibrohhm/webpack-vue-buefy', description: 'Vue.js starter with Webpack and Buefy', category: 'Front end' },
	{ name: 'Gravity Balls', url: 'https://codepen.io/colorcreate/pen/BOzKMP', description: 'Ball movements around a single gravity point', category: 'Front end' },
	{ name: 'Rain Balls', url: 'https://codepen.io/colorcreate/pen/rZLeKB', description: 'Falling ball movements', category: 'Front end' },
	{ name: 'Prime Count', url: 'https://codepen.io/colorcreate/pen/ZMOOEG', description: 'Finding the next prime number', category: 'Front end' },
	{ name: 'Color Touch', url: 'https://codepen.io/colorcreate/pen/VGmeZX', description: 'Touch-reactive color effect', category: 'Front end' },
	{ name: 'Banana', url: 'https://ibrohhm.github.io/banana/', description: 'Banana everywhere', category: 'Front end' },
];

/** Where a project link goes, shown next to the project name. */
export function hostLabel(url: string): string {
	if (url.includes('codepen.io')) return 'CodePen';
	if (url.includes('github.com')) return 'GitHub';
	return 'Website';
}
