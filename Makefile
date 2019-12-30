.PHONY: start tests-browse

tests-browse:
	@./node_modules/.bin/cypress open

start:
	@npm run dev