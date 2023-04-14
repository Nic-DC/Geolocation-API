import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

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
  );
};

export default PlacesWorkingHours;
