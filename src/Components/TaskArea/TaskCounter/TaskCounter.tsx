import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Status } from "../../Sidebar/TaskFormEnum/Status";
import EmitCorrectBorderColor from "./Helpers/EmitCorrectBorderColors";
import EmitCorrectLabel from "./Helpers/EmitCorrectLabel";

export default function TaskCounter(props:ITaskCounter) {
const {status = Status.done, count = 0} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: "transparent",
          border: "5px solid",
          width: "100px",
          height: "100px",
          borderColor: `${EmitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="text.primary" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
          color="text.priimary"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {EmitCorrectLabel(status)}
        </Typography>
    </Box>
  );
}
