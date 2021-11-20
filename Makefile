pull:
	./scripts/pull

push:
	./scripts/push $$(git status videos --porcelain | awk -F' - ' '{print $$2}')
