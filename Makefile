all:
	cd videos && youtube-dl https://www.youtube.com/FunkyVal --write-description --skip-download --youtube-skip-dash-manifest --dateafter 20180101
