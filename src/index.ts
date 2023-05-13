import "dotenv/config";
import { connect } from './database';

void connect().then(() => console.log("Connected")).catch((e) => console.error("Error", e));
