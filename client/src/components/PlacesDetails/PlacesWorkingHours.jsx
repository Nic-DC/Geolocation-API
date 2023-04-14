import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PlacesWorkingHours = ({ place }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const getTimeRange = (range) => {
    const openTime = formatTime(range[0].open_time);
    const closeTime = formatTime(range[0].close_time);
    return `${openTime} - ${closeTime}`;
  };

  return (
    <Typography variant="subtitle2" color="textSecondary">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Day</strong>
              </TableCell>
              <TableCell>
                <strong>Time Interval</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {days.map((day, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {day}
                </TableCell>
                <TableCell>{getTimeRange(place.hours.week_ranges[index])}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Typography>
    // <Typography variant="subtitle2" color="textSecondary">
    //   {days.map((day, index) => (
    //     <List key={index} dense>
    //       <ListItem disablePadding>
    //         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    //           <ListItemText primaryTypographyProps={{ variant: "body2", fontWeight: "bold" }} primary={day} />
    //           <ListItemText
    //             primaryTypographyProps={{ variant: "body2" }}
    //             primary={getTimeRange(place.hours.week_ranges[index])}
    //           />
    //         </Box>
    //       </ListItem>
    //     </List>
    //   ))}
    // </Typography>
    // <Typography variant="subtitle2" color="textSecondary">
    //   {days.map((day, index) => (
    //     <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
    //       <Typography variant="body2" sx={{ fontWeight: "bold" }}>
    //         {day}:
    //       </Typography>
    //       <Typography variant="body2">{getTimeRange(place.hours.week_ranges[index])}</Typography>
    //     </Box>
    //   ))}
    // </Typography>
    // <Typography variant="subtitle2" color="textSecondary">
    //   {days.map((day, index) => (
    //     <div key={index} style={{ marginBottom: "8px" }}>
    //       <strong>{day}</strong>: {getTimeRange(place.hours.week_ranges[index])}
    //     </div>
    //   ))}
    // </Typography>
  );
};

export default PlacesWorkingHours;
