include .env

install: docker-build up
up: docker-up
down: docker-down
restart: docker-down docker-up
clear: docker-down-clear

docker-build:
	@echo "build images"
	@docker build -t ${DOCKER_REGISTRY}/${ENV}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION} -f ./docker/${ENV}/nodejs/Dockerfile .

docker-up:
	@echo "docker up"
	@docker-compose -f docker-compose-${ENV}.yml up --build -d

docker-down:
	@echo "docker down"
	@docker-compose -f docker-compose-${ENV}.yml down --remove-orphans

docker-down-clear:
	@echo "docker clear"
	@docker-compose -f docker-compose-${ENV}.yml down -v --remove-orphans

docker-ps:
	@docker-compose -f docker-compose-${ENV}.yml ps

shell: 
	@docker-compose -f docker-compose-${ENV}.yml exec app /bin/sh

cold-shell: 
	@docker-compose -f docker-compose-${ENV}.yml run app /bin/sh