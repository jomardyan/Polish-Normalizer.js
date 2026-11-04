.DEFAULT_GOAL := help

# Local quality and source packaging commands.
.PHONY: help install dev test lint build clean package security

help:
	@echo "Targets: install dev test lint build clean package security"

install:
	npm ci

dev:
	npm test

test:
	npm test

lint:
	npm run lint

build:
	npm pack --dry-run

clean:
	rm -f polish-normalizer-*.tgz

package:
	npm pack

security:
	npm audit
