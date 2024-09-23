import { logo } from "../assets/icons";
import { hamMenu } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
	return (
		<header
			className="padding-x py-8 absolute z-10 w-full">
			<nav
				className="flex justify-between items-center max-container">
				<a href="/">
					<img
					src={logo} 
					alt="logo"
					width="60px"
					height="60px"/>
				</a>
				<ul
					className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{
						navLinks.map((item) => {
							return(
								<li key={item.label}>
									<a
										href={item.href}
										className="font-montserrat leading-normal text-xl text-slate-gray">
											{item.label}
									</a>
								</li>
							)
						})
					}
				</ul>
				<div className="hidden max-lg:block">
					<img
						src={hamMenu}
						width="25px"
						height="25px"/>
				</div>
			</nav>  
		</header>
	)
}

export default Nav