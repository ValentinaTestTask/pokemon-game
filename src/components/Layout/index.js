import s from  './style.module.css';

const Layout = ( { title, descr, urlBg=false, colorBg=false } ) => {
	//urlBg="" colorBg=""
	let styleBg = (urlBg) ? 
		{backgroundImage: `url(${urlBg})`} : 
		(colorBg) ? 
			{background: colorBg} : 
			{backgroundImage: 'none'};
	console.log(styleBg);
	return (
		<section className={s.root} style={styleBg} >
			<div className={s.wrapper}>
				<article>
					<div className={s.title}>
						<h3>{ title }</h3>
					</div>
					<div className={[s.desc, s.full]}>
						<p>{ descr	}</p>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Layout;