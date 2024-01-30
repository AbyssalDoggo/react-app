import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";

import {
  Link,
  Avatar,
  Box,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";

interface Props {
  links: string[];
  name: string[];
  onSelectItem: (item: string) => void;
}

function CustomHeader({ links, name, onSelectItem }: Props) {
  return (
    <div>
      <Sheet variant="solid" color="neutral" sx={{ p: 4 }}>
        <Stack direction="row" spacing={5} justifyContent="flex-end">
          {name.map((names, index) => (
            <Link
              href={links[index]}
              variant="solid"
              underline="none"
              color="neutral"
              key={index}
              onClick={() => onSelectItem(names)}
            >
              {names}
            </Link>
          ))}
          <Button>Đăng ký</Button>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
                borderRadius: "50%",
              }}
            >
              <Avatar sx={{ maxWidth: "40px", maxHeight: "40px" }} />
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src="" srcSet="" sx={{ borderRadius: "50%" }} />
                  <Box sx={{ ml: 1.5 }}>
                    <Typography level="title-sm" textColor="text.primary">
                      username
                    </Typography>
                    <Typography level="body-xs" textColor="text.tertiary">
                      username@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem>Log out</MenuItem>
            </Menu>
          </Dropdown>
        </Stack>
      </Sheet>
    </div>
  );
}

export default CustomHeader;
