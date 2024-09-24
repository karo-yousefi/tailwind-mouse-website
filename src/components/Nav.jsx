import { logo } from "../assets/icons";
import { hamMenu } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
	return (
		<header
			className="padding-x py-4 fixed bg-bgColor-100 z-20 w-full border-b-[2px] border-textColor-200">
			<nav
				className="flex justify-between items-center max-container">
				<a href="/">
					<img
					src={logo} 
					alt="logo"
					width="50px"
					height="50px"
					 className="hover:scale-[1.08] transition-normal"/>
				</a>
				<ul
					className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{
						navLinks.map((item) => {
							return(
								<li key={item.label}>
									<a
										href={item.href}
										className="leading-normal text-2xl font-[500] font-raleway text-textColor-200 hover:text-primary-200 transition-normal">
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