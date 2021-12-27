import { makeStyles, Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'
const CardListViewStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: '24px',
      paddingBottom: '24px',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
)
export default CardListViewStyles
