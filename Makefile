all:
	cd videos && youtube-dl https://www.youtube.com/c/FunkyVal/videos --output '%(upload_date)s - %(id)s - %(title)s.%(ext)s' --write-description --skip-download --youtube-skip-dash-manifest --dateafter 20180101
