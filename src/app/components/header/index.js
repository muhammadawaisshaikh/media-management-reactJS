import Image from 'next/image'
import styles from './header.module.css'
import Grid from '@mui/material/Grid';
import { Avatar, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';

export default function Header() {
    return (
        <div className={styles.header}>
            <Grid container>
                <Grid xs={9}>
                   <div className={styles.pageName}>
                        <IconButton aria-label="back" size="large" className={styles.backBtn}>
                            <ArrowBackIcon />
                        </IconButton>
                        <div className={styles.pageDetails}>
                            <h4>
                                Media Management
                                <EditIcon className={styles.editIcon} fontSize="small" />
                            </h4>
                            <p>Draft campaign</p>
                        </div>
                   </div>
                </Grid>
                <Grid xs={3}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoTypo}>
                            <p>Jane Cooper</p>
                            <a href='#'>Change profile</a>
                        </div>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
