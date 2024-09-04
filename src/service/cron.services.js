import cron from 'node-cron';
import loanRepository from '../repositories/loan.repositories.js';
import userRepository from '../repositories/user.repositories.js';
import bookRepository from '../repositories/book.repositories.js';
import moment from 'moment';
import sendEmail from './email.services.js';

cron.schedule('0 9 * * *', async () => {
    const loans = await loanRepository.findAllLoansRepository();
    const today = moment().startOf('day');

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf('day');
        const reminderDueDate = moment(dueDate).subtract(1, 'days');
        const userLoan = await userRepository.findUserByIdRepository(loan.userId);
        const bookLoan = await bookRepository.findBookByIdRepository(loan.bookId);

        if(today.isSame(reminderDueDate)){
            sendEmail(userLoan.email, bookLoan.title, loan.dueDate)
        }
    });
});