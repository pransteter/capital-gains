Makefile.PHONY: help

help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-15s[0m %s\n", $$1, $$2}'

up: ## Turn on
	docker compose down -v && docker compose up -d

down: ## Turn off
	docker compose down -v

process-one: ## Process a list of transactions (by input text as json array)
	@echo "Insert one transaction list: (ex.: [{\"operation\":\"buy\", \"unit-cost\":10.00, \"quantity\": 10000},{\"operation\":\"sell\", \"unit-cost\":20.00, \"quantity\": 5000}])"
	@read -r transactionList; \
	docker-compose exec capital-gains_service npm --prefix /app run process-one --transactionList=$$(echo "$$transactionList" | jq -c .) --silent

process-multiple: ## Process a list of transactions (by json file path)
	@echo "please insert a json file path:"
	@read -r jsonFilePath; \
	docker-compose exec capital-gains_service npm --prefix /app run process-multiple --jsonFilePath=$$jsonFilePath --silent
