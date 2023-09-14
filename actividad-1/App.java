/**
 * App
 */
public class App {

    // Constructor de la clase
    public static void main(String[] args) {
        System.out.println("Hello");
        NumericArray();
    }

    // Arrays
    public static void NumericArray() {
        int[] intNumbers = { 1, 2, 3, 5 };
        for (int i = 0; i < intNumbers.length; i++) {
            System.out.println(intNumbers[i]);
        }
    }

}
