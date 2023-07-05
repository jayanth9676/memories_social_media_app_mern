import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";

// import useStyles from "./styles.js";
import {
    StyledPaper,
    StyledForm,
    StyledFileInput,
    StyledButtonSubmit,
    StyledTextField,
} from "./styles.js";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    // const classes = useStyles();

    const handleSumbit = () => {};

    const clear = () => {};

    return (
        <StyledPaper>
            <Paper /* className={classes.paper} */>
                <StyledForm>
                    <form
                        autoComplete="off"
                        noValidate
                        /* className={`${classes.root} ${classes.form}`} */
                        onSubmit={handleSumbit}
                    >
                        <Typography variant="h6">Creating A Memory</Typography>

                        <StyledTextField>
                            <TextField
                                name="creator"
                                variant="outlined"
                                label="Creator"
                                fullWidth
                                value={postData.creator}
                                onChange={(e) =>
                                    setPostData({
                                        ...postData,
                                        creator: e.target.value,
                                    })
                                }
                            />
                        </StyledTextField>

                        <StyledTextField>
                            <TextField
                                name="title"
                                variant="outlined"
                                label="Title"
                                fullWidth
                                value={postData.title}
                                onChange={(e) =>
                                    setPostData({
                                        ...postData,
                                        creator: e.target.value,
                                    })
                                }
                            />
                        </StyledTextField>

                        <StyledTextField>
                            <TextField
                                name="message"
                                variant="outlined"
                                label="Message"
                                fullWidth
                                value={postData.message}
                                onChange={(e) =>
                                    setPostData({
                                        ...postData,
                                        creator: e.target.value,
                                    })
                                }
                            />
                        </StyledTextField>

                        <StyledTextField>
                            <TextField
                                name="tags"
                                variant="outlined"
                                label="Tags"
                                fullWidth
                                value={postData.tags}
                                onChange={(e) =>
                                    setPostData({
                                        ...postData,
                                        creator: e.target.value,
                                    })
                                }
                            />
                        </StyledTextField>

                        <div /* className={classes.fileInput} */>
                            <StyledFileInput>
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        setPostData({
                                            ...postData,
                                            selectedFile: base64,
                                        })
                                    }
                                />
                            </StyledFileInput>
                        </div>

                        <Button
                            // StyledButtonSubmit
                            // className={classes.buttonSubmit}
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            fullWidth
                        >
                            Submit
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={clear}
                            fullWidth
                        >
                            Clear
                        </Button>
                    </form>
                </StyledForm>
            </Paper>
        </StyledPaper>
    );
};

export default Form;
