package calculadora;
import java.util.Scanner;

public class Calculadora {
    static char operador;
    static double num1, num2, resultado;

    public static void main(String[] args) {

        Scanner inputEntrada = new Scanner(System.in);
        // Pedir el operador para la operación a realizar
        PrintMessage("Ingresa el operador que deseas (+, -, *, /)");
        operador = inputEntrada.next().charAt(0);

        // Pedir el número 1
        PrintMessage("Ingresa el primer número");
        num1 = inputEntrada.nextDouble();

        // Pedir el número 2
        PrintMessage("Ingresa el segundo número");
        num2 = inputEntrada.nextDouble();

        inputEntrada.close();

        // Mostrar resultado
        System.out.print(RealizarOperacion());
    }

    // Imprimir mensajes en pantalla
    public static void PrintMessage(String mensaje) {
        System.out.println(mensaje);
    }

    // Realizar la operación
    public static double RealizarOperacion() {
        switch (operador) {
            case '+':
                return (num1 + num2);
            case '-':
                return (num1 - num2);

            case '*':
                return num1 * num2;

            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
}