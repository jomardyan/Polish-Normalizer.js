.DEFAULT_GOAL := help
.DELETE_ON_ERROR:
# Targets share generated output; serialize aggregate invocations even with -j.
.NOTPARALLEL:
ifeq ($(OS),Windows_NT)
PYTHON ?= python
NPM ?= npm.cmd
COMPOSER ?= composer.cmd
else
PYTHON ?= python3
NPM ?= npm
COMPOSER ?= composer
endif
NODE ?= node
PHP ?= php
DOTNET ?= dotnet


.PHONY: help install dev test lint format-check check build package clean security

help: ## Show commands; defaults never install, build, bump or deploy
	@echo "Polish-Normalizer.js - local development commands"
	@echo "  install                 Install locked JavaScript development dependencies"
	@echo "  dev                     Run the dependency-free normalizer examples and regressions"
	@echo "  test                    Run the library regression suite"
	@echo "  lint                    Run the canonical ESLint script"
	@echo "  format-check            Check formatting without modifying sources"
	@echo "  check                   Run the canonical complete validation script"
	@echo "  build                   Inspect npm package contents without creating an archive"
	@echo "  package                 Create the npm tarball after validation"
	@echo "  clean                   Remove only generated normalizer tarballs; preserve tracked files"
	@echo "  security                Audit locked development dependencies"
	@echo "Override executable paths with PYTHON, NODE, NPM, PHP, COMPOSER or DOTNET. Run from the repository root."

install: ## Install locked JavaScript development dependencies
	"$(NPM)" ci

dev: test ## Run the dependency-free normalizer examples and regressions

test: ## Run the library regression suite
	"$(NPM)" test

lint: ## Run the canonical ESLint script
	"$(NPM)" run lint

format-check: ## Check formatting without modifying sources
	"$(NPM)" run format:check

check: ## Run the canonical complete validation script
	"$(NPM)" run validate

build: ## Inspect npm package contents without creating an archive
	"$(NPM)" pack --dry-run

package: check ## Create the npm tarball after validation
	"$(NPM)" pack

clean: ## Remove only generated normalizer tarballs; preserve tracked files
	"$(NODE)" tools/make-clean.cjs

security: ## Audit locked development dependencies
	"$(NPM)" audit
