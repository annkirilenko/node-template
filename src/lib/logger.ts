import { default as winston, format, transport } from 'winston';
import 'winston-daily-rotate-file';
import * as dotenv from 'dotenv';

dotenv.config();

let transports: transport[] = [];

if (Boolean(Number(process.env.LOGGER_FILE))) {
    transports.push(new winston.transports.DailyRotateFile({
        filename: './log/error-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '4d',
        level: 'error'
    }));
    transports.push(new winston.transports.DailyRotateFile({
        filename: './log/app-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '4d'
    }));
}

transports.push(new winston.transports.Console());

const logger = winston.createLogger({
    level: process.env.LOGGER_LEVEL,
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'service'] }),
        format.printf(info => `${info.timestamp} [${info.level}]: ${JSON.stringify(info.message)} ${Object.keys(info.metadata).length ? "\r\n" + JSON.stringify(info.metadata) : ''}`)
    ),
    defaultMeta: { service: 'note-template' },
    transports: transports
});

export default logger;