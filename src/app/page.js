import Link from "next/link";

import { AppBar, Box, Toolbar, IconButton, Typography, Button, colors  } from "@mui/material";

export default function Home() {
  return (
    <main>
<Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/users">Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

     </main>
  );
}
