const SEND_FILE_OPTIONS = { root: (__dirname + '/static') };

const FUNCIONES = {
    principal: async (req, res) => {
        try {
            res.sendFile("/index.html",
                SEND_FILE_OPTIONS,
                function (err) {
                    if (err) {
                        console.error(err);
                    }
                })
        } catch (error) {
            res.status(500).json({ error: error.description })
        }
    }
}

exports.funciones = {  ...FUNCIONES };