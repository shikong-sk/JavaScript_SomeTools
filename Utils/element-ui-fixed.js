//修正 Element-UI el-table错位
let fixElementTable = (tableDom) => {
	const tableWrapper = tableDom.querySelector('.el-table__body-wrapper')
	const tableBody = tableDom.querySelector('.el-table__body')
	const colgroup = tableDom.querySelector("colgroup");
	/**
	 * (以下数值为滚动条高度，可以自己根据情况通过class重新修改)
	 */
	//内容大于容器时
	if (tableBody.clientWidth > tableWrapper.offsetWidth) {
		
		//设置x轴滚动
		tableWrapper.style.overflowX = 'auto'
		//解决固定列错位 （没有错位的可以忽略以下内容）
		let fixedWrap = tableDom.querySelectorAll('.el-table .el-table__fixed-body-wrapper')
		if (fixedWrap.length > 0) {
			fixedWrap.forEach(item => {
				item.style.paddingBottom = 8 + 'px'
			})
		}
		//解决固定列覆盖滚动条
		let fixed_left = tableDom.querySelector('.el-table .el-table__fixed')
		let fixed_right = tableDom.querySelector('.el-table .el-table__fixed-right')
		if (fixed_left) {
			fixed_left.style.height = 'calc(100% - 8px)'
		}
		if (fixed_right) {
			fixed_right.style.height = 'calc(100% - 8px)'
		}
		//解决表头偏移
		//没有原生的gutter时自己新增一个
		const gutter = colgroup.querySelector(`col[name=gutter]`)
		const gutterx = colgroup.querySelector(`col[name=gutterx]`)
		if (!gutter && !gutterx) {
			let col = document.createElement('col')
			col.setAttribute('name', 'gutterx')
			col.setAttribute('width', '8')
			colgroup.appendChild(col)
		}
	}
}

export {
	fixElementTable
}
