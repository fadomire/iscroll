
		this.scrollerWidth	= this.scale ? Math.round(this.scroller.offsetWidth * this.scale) : this.scroller.offsetWidth;
		this.scrollerHeight	= this.scale ? Math.round(this.scroller.offsetHeight * this.scale) : this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		
		var limit;
		if ( this.options.infiniteElements ) {
			this.options.infiniteLimit = this.options.infiniteLimit || Math.floor(2147483645 / this.infiniteElementHeight);
			limit = -this.options.infiniteLimit * this.infiniteElementHeight + this.wrapperHeight;
		}
		this.maxScrollY		= limit !== undefined ? limit : this.wrapperHeight - this.scrollerHeight;
