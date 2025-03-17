Makefile.PHONY: help

help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-15s[0m %s\n", $$1, $$2}'

start: ## Start nodejs cli
	docker-compose run --rm capital-gains_service npm --prefix /app run start --silent

tests: ## Run tests
	docker-compose run --rm capital-gains_service node --test --experimental-test-coverage '**/**/*.test.js'
