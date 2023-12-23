import { HStack, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
	return (
		<HStack padding="10px" display={"flex"} justifyContent={"space-between"}>
			<Link to="/">
				<Image src={logo} boxSize="60px" objectFit="cover" />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
